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
          <el-button type="info" size="mini">编辑</el-button>
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
      this.getData()
    },
    methods: {
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
        this.$http.post('http://localhost:1001/user/getUsersList/' + this.pager.currentPage + '/' + this.pager.pageSize, this.searchObj).then(res => {
          this.tableList = res.data.dataList
          this.pager = res.data.pager
        })

      },

      deleteItem (item) {
        this.$http.post('http://localhost:1001/user/delete/' + item.id).then(res => {
          this.getData()
          this.$message.success('success')
        })
      },

      addForm () {
        this.$http.post('http://localhost:1001/user/add', this.model).then(res => {
          this.model = {}
          this.getData()
        })
      }
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 20px;
  }
</style>
