<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul >
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <!-- 使用v-for循环显示data中数据时，在img的src绑定时，一定要加上：冒号，不然vue以为后边的值为字符串，而不是js代码 -->
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
    name:'HomeWeekend',
    data (){
        return {
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
                title:'长恨歌',
                desc:'长恨歌就是干撒哈撒货到付款撒娇的尽快发的少部分空间的'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                title:'长恨歌',
                desc:'长恨歌就是干撒哈撒货到付款撒娇的尽快发的少部分空间的'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/source/1507/fe/679926851c309a.jpg_r_640x214_114816de.jpg',
                title:'长恨歌',
                desc:'长恨歌就是干撒哈撒货到付款撒娇的尽快发的少部分空间的'
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/source/1507/98/d9c848b0d7d65a.jpg_r_640x214_55778a01.jpg',
                title:'长恨歌',
                desc:'长恨歌就是干撒哈撒货到付款撒娇的尽快发的少部分空间的'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
     @import '~styles/mixins.styl';
    .title
        margin-top:.2rem
        line-height :.8rem
        background :#ccc
        text-indent :.2rem
    .item-img-wrapper
        overflow :hidden
        height :0
        padding-bottom:33.9%

    .item-img
        width : 100%
    .item-info
        padding:1
        // 下边的 min-width :0样式，是加入显示多余的地方为...，但是在加入宏定义样式之后，没有效果，只是隐藏。则再加入下边的一行样式代码
        min-width :0
        .item-title
            line-height :.54rem
            font-size :.32rem
            ellipsis()
        .item-desc
            line-height :.4rem
            font-size :.28rem
            color :#ccc
            ellipsis()

</style>

