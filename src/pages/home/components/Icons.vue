<template>
    <div class="icons">
         <swiper :options="swiperOption">
                <swiper-slide v-for="(page,index) of pages" :key="index">
                    <div class="icon" v-for="item of page" :key="item.id">
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl">         
                        </div>    
                        <p class="icon-desc">{{item.desc}}</p>        
                    </div>
                </swiper-slide>  
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    data (){
        return{
            // 设置将图标这里的轮播默认的关闭，只能手动的进行划
            swiperOption:{
                autoplay:false
            }
        }
    },
    computed:{
        pages (){
            const pages = []
            this.list.forEach((item,index) => {
                // 对展示的图标进行翻页操作，一页显示八个。进行计算。
                const page = Math.floor(index / 8);
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            });
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
// 下边这两个就是自己定义的类似于C语言中宏定义的东西，在这里进行引入
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swpier-container
        width:100%
        heigh :0
        // 最外层div取高度为50%
        padding-bottom :50%
    .icons
        margin-top :.1rem
        .icon   
            position :relative
            float :left
            height :0
            // 下边两个代码的意思是 width=25%，height=25%
            width:25%
            padding-bottom :25%
            .icon-img
                position:absolute
                top : 0
                left : 0
                right : 0
                bottom :.55rem
                box-sizing :border-box
                padding :.1rem 
                .icon-img-content
                    height : 100%
                    display :block
                    margin : 0 auto 
            .icon-desc
                position:absolute
                bottom : 0
                left : 0
                right : 0
                height :.44rem
                line-height :.44rem
                color:$darkTextColor
                text-align :center

                //当描述太多的时候，显示... 此时就可以使用相当于C语言中的宏定义的东西，新建一个文件，只存放有可能有用到的重复的东西
                ellipsis()

</style>


