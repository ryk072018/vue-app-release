<template>
  <div class="add">
    <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead" />
    <van-cell-group>
      <van-field v-model="title" label="文章标题" placeholder="文章标题" />
      <van-field v-model="summary" label="文章简介" placeholder="文章简介" />
      <van-field v-model="content" label="文章内容" placeholder="文章内容" />
    </van-cell-group>
    <van-button type="primary" @click="handleAdd" class="add-button">提交</van-button>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      fileList: [],
      title: '',
      summary: '',
      content: '',
      img: ''
    }
  },
  methods: {
    afterRead (info) {
      this.img = info.content
    },
    handleAdd () {
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img
      }
      // post请求
      fetch('/article/create', {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).then(res => res.json()).then(res => {
        if (res.status === 200) {
          this.$toast.success('文章发布成功')
          this.$router.push({ name: 'Home' })
        } else {
          this.$toast.fail(res.errMsg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .add-button{
    position: absolute;
    left: 0px;
    bottom: 80px;
    width: 100%;
  }
</style>
