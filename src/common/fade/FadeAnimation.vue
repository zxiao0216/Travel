<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
// 单文件组件的编写形式
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
    .v-enter,.v-leave-to
        opacity :0
    .v-enter-active,.v-leave-active 
        transition :opacity .5s
</style>
