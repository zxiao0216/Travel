<template>
    <ul class="list">
        <li 
            class="item"
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
        {{item}}
        </li>
        </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    computed:{
        letters(){
             const letters = []
             for(let i in this.cities){
                 letters.push(i)
             }
             return letters
        } 
    },
    data(){
        return{
            // touchStatus  手指的滑动
            touchStatus :false,
            startY :0,
            timer:null
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        // 手指上下滑动的频率太快了
        handleTouchMove(e){
            if(this.touchStatus){
                // startY 是指A字母距离输入框下边的位置，touchY是指 顶部到手指滑动的地方之间的距离-79，79指的是头部加输入框的位置。20指的是每个字母自己的高度
                if(this.timer){
                    clearTimeout(this.timer)
                }
                const timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY -79
                    const index = Math.floor((touchY - this.startY)/20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)  //16ms检测一次再只能，能够大大降低手指滑动的频率
            }
        },
        handleTouchEnd(){
             this.touchStatus = false
        },
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display : flex
        flex-direction : column
        justify-content : center
        position :absolute
        top: 1.58rem
        right:0
        bottom :0
        width: .4rem
        .item
            text-align :center
            line-height :.4rem
            color :$bgColor
</style>
