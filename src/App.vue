<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive标签是vue自带的，当router-view路由加载过一次之后，就把路由中的内容放在内存之中，再一次再进入这个路由之后，不需要再进行渲染这个组件（重新执行钩子函数），只需将内容拿出来显示即可 -->
    <!-- exclude="Detail" 加入这个在标签中，解决缓存的问题，但是详情页的渐隐渐现出现问题.最后还是使用之间的拼接的办法，将id拼接在url上，然后再通过vuex中的mapState解决的-->
    <keep-alive>
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// 单文件组件的编写形式
export default {
  name: 'App'
}
</script>

<style>

</style>
