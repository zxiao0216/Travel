<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-image" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- 轮播图下边的小点 -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div> 
</template>

<script> 
export default{
    name:'HomeSwiper',
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[{
                id:'0001',
                imgUrl:'https://img1.qunarzz.com/piao/fusion/1808/fd/fddc5309111a0402.jpg_750x200_e7b93551.jpg'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg_750x200_49735140.jpg'
            }]
        }
    }
}

</script>
<style lang="stylus" scoped>
    // 下边这个代码的意思是，将.swiper 下边只要出现.swiper-pagination-bullet-active子类的背景颜色都重新设置。此时.swiper-pagination-bullet-active就不受scoped的限制了
    .swiper >>> .swiper-pagination-bullet-active
            background :#fff
    .swiper
        //  下边这三行的意思是，图片的大小是750*200，则宽高的比例是3.75，则保证轮播图所占的比例是3.75.还可以使用下边的方法写。修改浏览器上的network=fast 3g
        overflow :hidden
        width :100%
        height :0
        padding-bottom :26.75% 
        // padding-bottom :37.5% 
        background :#ccc

        // height :37.5vm  //但是这种写法会存在浏览器的兼容问题。
        
        .swiper-image
            width :100%
    
</style>


