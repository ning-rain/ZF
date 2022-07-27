<template>
  <van-list>
    <van-cell
      v-for="(article, index) in localNewList"
      :key="index"
      class="article-item"
    >
      <div slot="title" class="title van-multi-ellipsis--l2">
        {{ article.title }}
      </div>
      <div slot="label">
        <div v-if="article.cover.type === 3" class="cover-wrap">
          <div
            class="cover-item"
            v-for="(img, index) in article.cover.images"
            :key="index"
          >
            <van-image class="cover-item-img" fit="cover" :src="img" />
          </div>
        </div>
        <div class="label-info-wrap">
          <span>{{ article.aut_name }}</span>
          <span>{{ article.comm_count }}评论</span>
        </div>
      </div>
      <van-image
        v-if="article.cover.type === 1"
        slot="default"
        class="right-cover"
        fit="cover"
        :src="article.cover.images[0]"
      />
    </van-cell>
  </van-list>
</template>

<script>
// 引入当前激活的分类id
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      loading: false,
      finished: false,
    }
  },
  computed: {
    ...mapGetters(['ID', 'localNewList', 'current'])
  },
  watch: {
    ID (id) {
      this.$store.dispatch('newlist/getNewlist', { id, current: this.current })
    }
  },

}
</script>

<style>
</style>
