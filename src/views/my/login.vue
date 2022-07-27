<template >
  <div class="login_container">
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="content">
      <van-form @submit="onSubmit" validate-trigger="submit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit" class="longin_btn"
            >登录</van-button
          >
        </div>
        <div class="register">
          <router-link to="/register" class="register_class">
            还没有账号，去注册
          </router-link>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { userLoginAPI } from "@/api/user";
export default {
  created () { },
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit () {
      this.userRegister()
    },
    async userRegister () {
      try {
        const { data } = await userLoginAPI({
          username: this.username,
          password: this.password
        })
        this.$store.commit('setUser', data.body)
        this.$toast('登录成功')
        this.$router.back()
      } catch (error) {
        this.$toast('登录失败')
        console.log(error);
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {},
}
</script>


<style scoped lang="less">
.login_container {
  background-color: #f5f7f9;
  height: 100vh;
  /deep/.navbar {
    background-color: #21b97a;
    .van-icon {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
  .content {
    margin-top: 10px;
  }
  .longin_btn {
    background-color: #1cb676;
  }
  .register {
    text-align: center;
    .register_class {
      display: inline-block;
      margin: 0 auto;
      color: #21b97a;
      font-size: 16px;
    }
  }
}
</style>
