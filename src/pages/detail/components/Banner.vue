<template>
    <div>   
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_600x330_23323094.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">范德萨范德萨范德萨发的</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe662;</span>39</div>
            </div>
        </div>
        <common-gallary 
        :imgs="imgs" 
        v-show="showGallary"
        @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
    name:'DetailBanner',
    data(){
        return{
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_r_800x800_261927d8.jpg','http://img1.qunarzz.com/sight/p0/1809/8e/8e280c5252345421a3.img.jpg_r_800x800_efb9481d.jpg']
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
    components:{
        CommonGallary,
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position :relative
        overflow :hidden
        height :0
        padding-bottom: 55%
        .banner-img
            width :100%
        .banner-info
            display :flex
            position :absolute
            left :0
            right :0
            bottom :0
            line-height :.6rem
            color :#fff
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex :1
                font-size :.32rem
                padding : 0 .2rem
            .banner-number
                line-height :.32rem
                height :.32 rem
                margin-top : .14rem
                padding :0 .4rem
                border-radius :.2rem
                font-size :.24rem
                background :rgba(0,0,0,.8)
                .banner-icon
                    font-size : .24rem
                    padding-right :.1rem
</style>
