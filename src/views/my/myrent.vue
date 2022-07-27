<template>
  <div>
    <van-nav-bar title="房屋管理">
      <van-icon
        slot="left"
        name="arrow-left"
        @click="$router.back()"
      ></van-icon>
    </van-nav-bar>
    <template v-if="homes.length > 0">
      <homeitem
        v-for="(item, index) in homes"
        :key="index"
        :item="item"
      ></homeitem>

      <div class="commit text" @click="$router.push('/puthome')">继续发布</div>
    </template>
    <!-- description="暂无房源快去发布吧" -->
    <van-empty v-else>
      <template slot="description">
        暂无房源,
        <span class="commit" @click="$router.push('/puthome')">
          快去发布吧
        </span>
      </template>
    </van-empty>
  </div>
</template>

<script>
import { getputhome } from '@/api/user'
import homeitem from '@/components/homeitem'
export default {
  created () {
    this.getputhomes()
  },
  data () {
    return {
      homes: [],
    }
  },
  methods: {
    async getputhomes () {
      this.$toast.loading('加载中...')
      try {
        const { data } = await getputhome()
        console.log(data)
        this.homes = data.body
        this.$toast.success('加载成功')
      } catch (e) {
        console.log(e)
        this.$toast.fail('加载失败，稍后重试')
      }
    },
  },
  computed: {},
  watch: {},
  filters: {},
  components: { homeitem },
}
</script>

<style scoped lang="less">
/deep/ .van-nav-bar {
  background-color: #4eb979;
  .van-nav-bar__title {
    color: #fff;
    font-size: 20px;
  }
  .van-icon {
    color: #fff;
    font-size: 20px;
  }
}
.commit {
  color: rgb(36, 160, 119);
}
.text {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
}
</style>
