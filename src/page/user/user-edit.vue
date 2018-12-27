<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>查询</span>
      </div>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="姓名" v-model="editObj.userName" class="input-with-select" clearable>
            <template slot="prepend">姓名：</template>
          </el-input>
          <el-input placeholder="别名" v-model="editObj.nickName" class="input-with-select" clearable>
            <template slot="prepend">别名：</template>
          </el-input>
          <el-input placeholder="性别" v-model="editObj.userSex" class="input-with-select" clearable>
            <template slot="prepend">性别：</template>
          </el-input>
          <el-input placeholder="密码" v-model="editObj.passWord" class="input-with-select" clearable>
            <template slot="prepend">密码：</template>
          </el-input>
          <router-link :to="{name:'user-list'}">
            <el-button icon="el-icon-back">return</el-button>
          </router-link>

          <el-button icon="el-icon-search" type="success" @click="save">save</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'user-edit',
    data () {
      return {
        editObj: {},
      }
    },
    created () {
      this.getUser();
    },
    methods: {
      getUser () {
        return this.$http.apiGet('user/getUser/' + this.$route.params.id).then(res => {
          this.editObj = res
        })
      },
      save(){
        console.log(this.editObj);
        return this.$http.apiPost('user/update/' + this.$route.params.id,this.editObj).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>
