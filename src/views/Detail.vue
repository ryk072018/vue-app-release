<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
    <div class="create-time">{{detail.createTime}}</div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Detail',
  data () {
    return {
      detail: {
        id: undefined,
        title: undefined,
        summary: undefined,
        content: undefined,
        createTime: undefined,
        img: undefined
      }
    }
  },
  created () {
    fetch(`/article/detail/${this.$route.query.id}`).then(res => res.json()).then(res => {
      if (res.status === 200) {
        this.detail = res.data
        this.detail.createTime = res.data.createTime ? moment(res.data.createTime).format('YYYY-MM-DD HH:mm:ss') : undefined
        return res
      } else {
        this.$toast.fail(res.errMsg)
      }
    })
  }
}
</script>

<style lang="scss">
  .detail {
    padding: 20px;
    text-align: left;
    .title {
      font-size: 25px;
      color: #1389FD;
    }
    .summary {
      background-color: #ccc;
      padding: 20px;
      border-radius: 5px;
      margin: 10px 0px;
    }
    .content{
      text-indent: 2em;
      line-height: 2em;
      background-color: #ddd;
      margin: 10px 0px;
      border-radius: 5px;
    }
    .create-time{
      text-align: right;
      color: #999;
    }
  }
</style>
