<template>
    <div>
       <div class="item"
        v-for="(item,index) of list"
        :key="index"
       >
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" 
                class="item-children"
            >
                <detail-list :list="item.children"></detail-list>
            </div>
       </div>
    </div>
</template>

<script>

export default {
    // name的命名1.是为了能够 使用到递归调用;2.去下缓存的时候使用；标签的名字
    name:'DetailList',
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title-icon
        display: inline-block
        width: .36rem
        height: .36rem
        top: .06rem
        left: .06rem
        background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .item-title
        line-height :.8rem
        font-size :.32rem
        padding :0 .2rem
    .item-children
        padding:0 .2rem
</style>
