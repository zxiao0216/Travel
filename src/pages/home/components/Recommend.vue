<template>
    <div>
        <div class="title">热销推荐</div>
        <ul >
            <router-link 
                tag="li"
                class="item border-bottom" 
                v-for="item of list" 
                :key="item.id"
                :to="'/detail/' + item.id "
            >
                <!-- 使用v-for循环显示data中数据时，在img的src绑定时，一定要加上：冒号，不然vue以为后边的值为字符串，而不是js代码 -->
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    },
}
</script>
<style lang="stylus" scoped>
     @import '~styles/mixins.styl';
    .title
        margin-top:.2rem
        line-height :.8rem
        background :#ccc
        text-indent :.2rem
    .item
        display :flex
        height :1.9rem
        overflow :hidden
        .item-img
            width : 1.7rem
            height :1.7rem
            padding:.1rem
        .item-info
            flex :1
            // 下边的 min-width :0样式，是加入显示多余的地方为...，但是在加入宏定义样式之后，没有效果，只是隐藏。则再加入下边的一行样式代码
            min-width :0
            padding :.1rem
            .item-title
                line-height :.54rem
                font-size :.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                font-size :.28rem
                color :#ccc
                ellipsis()
            .item-button
                margin-top:.16rem
                line-height:.44rem 
                background :#ff9300
                padding :0 .2rem
                border-radius 0.6rem 
                color :#fff

</style>

