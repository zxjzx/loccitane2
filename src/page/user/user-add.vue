<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>新增</span>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form size="mini" :label-position="'right'" label-width="80px" label-suffix=":">

            <el-form-item label="姓名" prop="userName" verify>
              <el-input v-model.name="model.userName"></el-input>
            </el-form-item>

            <el-form-item label="别名" alias="别名" prop="nickName" verify>
              <el-input v-model.name="model.nickName"></el-input>
            </el-form-item>

            <el-form-item label="passWord" verify phone>
              <el-input v-model.name="model.passWord"></el-input>
            </el-form-item>

            <el-form-item label="userSex" verify>
              <el-input v-model.name="model.userSex"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button size="small" type="success" @click="addForm">confirm</el-button>
            </el-form-item>
          </el-form>

        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'user-add',
    data () {
      return {
        model: {},
      }
    },
    methods:{
      addForm () {

        this.$http.apiPost('user/add', this.model).then(res => {
          this.$message.success("新增成功")
          this.$router.push({
            name:'user-list'
          });
        })
      }
    }
  }
</script>

<style scoped>

</style>
