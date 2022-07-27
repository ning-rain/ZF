<template>
  <div>
    <van-tabs
      v-model="active"
      @change="currentChange(active)"
      background="#1989fa"
      animated
      border
    >
      <van-tab
        :title="item.name"
        v-for="(item, index) in navlist"
        :key="index"
        @click.native="btn"
      >
        <new-list :channelID="item.id"></new-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import NewList from './new-list.vue'
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters(['navlist', 'current'])
  },
  created() {
    this['navlist/getNavlist']()
  },
  methods: {
    ...mapMutations(['navlist/updateCurrent']),
    ...mapActions(['navlist/getNavlist']),
    currentChange(active) {
      const id = this.navlist[active].id
      this['navlist/updateCurrent']({ active, id })
    },

  }
  ,

  components: {
    NewList
  }
}
</script>

<style scoped  lang='less'>
/deep/.van-list {
  padding-top: 40px;
}
/deep/.van-tabs__wrap {
  position: fixed;
  z-index: 99;
}
.title {
  font-size: 32px;
  color: #3a3a3a;
}

.van-cell__title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.van-cell__value {
  flex: unset;
  width: 232px;
  height: 146px;
  padding-left: 25px;
}

.right-cover {
  width: 100%;
  height: 146px;
}

.label-info-wrap span {
  font-size: 22px;
  color: #b4b4b4;
  margin-right: 25px;
}

.cover-wrap {
  display: flex;
  padding: 30px 0;
  .cover-item {
    flex: 1;
    height: 146px;
    &:not(:last-child) {
      padding-right: 4px;
    }
    .cover-item-img {
      width: 100%;
      height: 146px;
    }
  }
}
</style>
