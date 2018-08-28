<template>
    <div>忘记密码
      <el-input v-model="input" placeholder="请输入内容"></el-input>

      <el-form
      >
        <el-form-item prop="age" verify number>
          <el-input v-model.number="model.age"></el-input>
        </el-form-item>



        <el-form-item alias="姓名" prop="name" verify >
          <el-input v-model.name="model.name"></el-input>
        </el-form-item>

        <el-form-item prop="address" verify phone>
          <el-input v-model.name="model.address"></el-input>
        </el-form-item>
      </el-form>


    </div>
</template>

<script>
  export default {
    name: 'ChangePassword',
    data () {
      return {
        model: {
          age: '',
          name:'',
          sex:'',
        },
      }
    }
  }
</script>

<style scoped>

</style>
