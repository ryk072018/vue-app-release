<template>
  <div class="home">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id" @click="handleClick(item.id)">
        <div class="list">
          <div class="left">
            <img :src="item.img" alt="图片">
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create-time">{{item.createTime}}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    onLoad () {
      fetch('/article/list').then(res => res.json()).then(res => {
        if (res.status === 200) {
          this.loading = false
          this.finished = true
          this.list = res.data.map(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')
            return item
          })
        } else {
          this.$toast.fail(res.errMsg)
        }
      })
    },
    handleClick (id) {
      this.$router.push(
        {
          path: '/detail',
          query: {
            id
          }
        }
      )
    }
  }
}
</script>

<style lang="scss">
  .list {
    display: flex;
    background-color: #ccc;
    border-radius: 5px;
    .left {
      margin-right: 20px;
      img {
        width: 120px;
        height: 100px;
        border-radius: 10px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title{
        font-size: 16px;
        font-weight: 700;
      }
      .create-time{
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
