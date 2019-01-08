<template>
  <div>

    <router-link :to="'/user-add'"><el-button type="primary" size="mini">新增用户信息</el-button></router-link>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>查询</span>
      </div>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="姓名" v-model="searchObj.userName" class="input-with-select" clearable>
            <template slot="prepend">请输入姓名进行搜索：</template>
          </el-input>
          <el-input placeholder="别名" v-model="searchObj.nickName" class="input-with-select" clearable>
            <template slot="prepend">请输入别名进行搜索：</template>
          </el-input>
          <el-input placeholder="性别" v-model="searchObj.userSex" class="input-with-select" clearable>
            <template slot="prepend">请输入性别进行搜索：</template>
          </el-input>
          <el-input placeholder="密码" v-model="searchObj.passWord" class="input-with-select" clearable>
            <template slot="prepend">请输入密码进行搜索：</template>
          </el-input>
          <el-button icon="el-icon-search" @click="searchBtn">search</el-button>
        </el-col>
      </el-row>
    </el-card>


    <hr>

    <el-table
      :data="tableList"
      stripe
      border
      align="center"
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="nickName"
        label="别名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userSex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="passWord"
        label="密码">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="deleteItem(scope.row)">删除</el-button>

          <router-link :to="'/user-edit/'+scope.row.id"><el-button type="info" size="mini">编辑</el-button></router-link>
          <el-button type="info" size="mini" @click="detail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pager.currentPage"
        :page-size="pager.pageSize"
        layout="total, sizes, prev, pager, next, jumper"

        :total="pager.totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import http from '../../config/http'
  export default {
    name: 'user-list',
    data () {
      return {
        model: {},
        tableList: [],
        searchObj: {},
        pager: {
          currentPage: 1,
          pageSize: 10,
          totalCount: 7,
        }
      }
    },
    created () {
      this.getData();
      console.log(this.$route);
      console.log(this.$route.matched);
    },
    methods: {

      detail (detail) {
        console.log(detail)
      },
      searchBtn () {
        this.getData()
      },
      handleSizeChange (e) {
        this.pager.pageSize = e
        this.getData()
      },
      handleCurrentChange (e) {
        this.pager.currentPage = e
        this.getData()

      },
      getData () {
        this.$http.apiPost('user/getUsersList/' + this.pager.currentPage + '/' + this.pager.pageSize, this.searchObj).then(res=>{
          console.log(res);
          this.tableList = res.dataList
          if(res.pager){
            this.pager = res.pager
          }
        })
      },

      deleteItem (item) {
        this.$http.apiPost('user/delete/' + item.id).then(res => {
          this.getData()
          this.$message.success('success')
        })
      },


    }
  }
</script>

<style scoped>
  .box-card {
    margin: 20px;
  }
</style>
