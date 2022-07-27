<template >
  <div class="register_container">
    <van-nav-bar
      class="navbar"
      title="注册账号"
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
        <van-field
          v-model="repassword"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[
            { validator, required: true, message: '两侧输入密码不一致' },
          ]"
        />
        <div style="margin: 16px">
          <van-button
            block
            type="info"
            native-type="submit"
            class="register_btn"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { userRegisterAPI } from "@/api/user";
export default {
  created () { },
  data () {
    return {
      username: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    validator (val) {
      return this.password === val
    },
    onSubmit () {
      this.register()
    },
    async register () {
      try {
        await userRegisterAPI({
          username: this.username,
          password: this.password
        })
        this.$toast('注册成功,请登录')
        this.$router.go(-1)
      } catch (error) {
        this.$toast('注册失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.register_container {
  background-color: #f5f7f9;
  height: 100vh;
  /deep/.navbar {
    background-color: #1989fa;
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
}
</style>
