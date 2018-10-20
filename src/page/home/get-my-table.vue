<template>
  <el-row>
    <el-col :span="8" v-for="(item, index) in tableList" :key="index" >
      <el-card :body-style="{ padding: '0px' }">
        <img :src="item.thumbnail_pic_s" class="image">
        <div style="padding: 14px;">
          <div>{{item.title}}</div>
          <div class="bottom clearfix">
            <time class="time">{{ item.date }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'get-my-table',
    data () {
      return {
        tableList:[],
        currentDate: new Date()
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.post('/news', 'type=top&key=123456').then(res => {
          console.log(res.data)
          this.tableList = res.data.data
        })
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
