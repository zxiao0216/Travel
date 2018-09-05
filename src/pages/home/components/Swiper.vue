<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
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
    props:{
        list:Array
    },
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
        }
    },
    // v-if="list.length" 在home.vue中一开始创建的时候是通过空数组的形式进行创建的，这个代码的意思是，当list.length=0的时候，
      //  即一开始通过空数组形式传过来的时候，先不进行swiper的创建，就解决的轮播图默认是最后一个图片
    computed:{
        showSwiper (){
            return this.list.length;
        }
    }
}

</script>
<style lang="stylus" scoped>
    // 下边这个代码的意思是，将.swiper 下边只要出现.swiper-pagination-bullet-active子类的背景颜色都重新设置。此时.swiper-pagination-bullet-active就不受scoped的限制了
    .swiper >>> .swiper-pagination-bullet-active
            background :#fff
    .swiper
        //  下边这三行的意思是，图片的大小是640*200，则宽高的比例是3.15，则保证轮播图所占的比例是3.15.还可以使用下边的方法写。修改浏览器上的network=fast 3g
        overflow :hidden
        width :100%
        height :0
        // padding-bottom :26.75% 
        padding-bottom :31.5% 
        background :#ccc

        // height :37.5vm  //但是这种写法会存在浏览器的兼容问题。
        
        .swiper-image
            width :100%
    
</style>


