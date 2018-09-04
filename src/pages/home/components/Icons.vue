<template>
    <div class="icons">
         <swiper>
                <swiper-slide v-for="(page,index) of pages" :key="index">
                    <div class="icon" v-for="item of page" :key="item.id">
                        <div class="icon-img">
                            <img class="icon-img-content" :src="item.imgUrl" alt="">         
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
    data (){
        return{
            iconList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'文化古迹'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                desc:'演出'
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票'
            },{
                id:'0006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'文化古迹'
            },{
                id:'0007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                desc:'演出'
            },{
                id:'0008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc:'一日游'
            }]
        }
    },
    computed:{
        pages (){
            const pages = []
            this.iconList.forEach((item,index) => {
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
                bottom :.44rem
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


