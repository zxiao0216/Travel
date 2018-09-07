<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive标签是vue自带的，当router-view路由加载过一次之后，就把路由中的内容放在内存之中，再一次再进入这个路由之后，不需要再进行渲染这个组件（重新执行钩子函数），只需将内容拿出来显示即可 -->
    <keep-alive exclude="Detail">
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
