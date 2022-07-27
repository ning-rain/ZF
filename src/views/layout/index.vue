<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/find">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/news">资讯</van-tabbar-item>
      <van-tabbar-item
        :icon="user && user.token ? 'manager-o' : 'setting-o'"
        to="/my"
      >
        {{ user && user.token ? "我的" : "未登录" }}
      </van-tabbar-item>
    </van-tabbar>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {

  computed: {
    ...mapState(['user'])
  },

}
</script>

<style scoped lang="less">
.main {
  background-color: #eee;
  height: 91vh;
  overflow-y: auto;
}
</style>
