<template>
  <div>
    <nav-list></nav-list>
    <new-list></new-list>
  </div>
</template>

<script>
import NavList from './components/nav-list.vue'
import NewList from './components/new-list'

export default {
  name: 'news',
  components: {
    NavList, NewList
  }
}
</script>
<style scoped lang='less'>
html {
  overflow: hidden;
}
</style>
