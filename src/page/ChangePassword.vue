<template>
  <div style="margin:100px;">忘记密码
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <el-form
    >
      <el-form-item prop="age" verify number>
        <el-input v-model.number="model.age"></el-input>
      </el-form-item>


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
        <el-button size="mini" type="success" @click="addForm">confirm</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  export default {
    name: 'ChangePassword',
    data () {
      return {
        model: {},
        input: '测试数据了'
      }
    },

    methods:{
      addForm(){
        
      }
    }





  }
</script>

<style scoped>

</style>
