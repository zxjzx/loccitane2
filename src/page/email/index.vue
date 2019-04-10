<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发送邮件</span>
      </div>


      <el-row>
        <el-col :span="12">
          <el-form size="mini" :label-position="'right'" label-width="80px" label-suffix=":">

            <el-form-item label="receiver" prop="receiver" verify>
              <el-input v-model.receiver="model.receiver"></el-input>
            </el-form-item>

            <el-form-item label="title" alias="title" prop="nickName" verify>
              <el-input v-model.title="model.title"></el-input>
            </el-form-item>

            <el-form-item label="content" alias="content" prop="content" verify>
              <el-input type="textarea" v-model.content="model.content"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button @click="sendEmail">发送邮件</el-button>
            </el-form-item>
          </el-form>

        </el-col>
      </el-row>


      <el-button @click="addRecord">添加记录</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'send-email',
    data () {
      return {
        model: {},
      }
    },
    methods: {

      addRecord () {

        let obj = {
          type: 1,
          name: 'name',
          time: new Date(),
          params: 'params'
        }
        console.log(obj);
        this.$http.apiPost('log/add', obj).then(res => {
          console.log(res)
        })
      },

      sendEmail () {
        let info = {
          receiver: '1358280824@qq.com',
          title: 'springboot测试',
          content: '发送的内容'
        }
        console.log(this.model)
        this.$http.apiPost('sendEmail', this.model).then(res => {
          if (res == 'success') {
            this.$message.success('发送成功')
          } else {
            this.$message.error(res.message)
          }
        }, error => {
          this.$message.error(error)
        })
      },
    }
  }
</script>

<style scoped>

</style>
