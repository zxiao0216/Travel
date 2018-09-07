<template>
    <div>
        <detail-banner 
                    :sightName="sightName"
                    :bannerImg="bannerImg"
                    :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header>dsfdsf</detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            lastId:'',
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo(){
            // 这两种方式都可以用来调用接口
            // axios.get('/api/detail.json?id=' + this.$route.params.id ).then(this.handleGetDataSucc)

              axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }
            ).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted(){  
        this.lastId = this.$route.params.id
        this.getDetailInfo()
    },
    computed:{
        ...mapState(['id'])
    },
    activated(){
        if(this.lastId !== this.$route.params.id){
            this.lastId = this.$route.params.id
            this.getDetailInfo()
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height :50rem
</style>
