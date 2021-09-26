<template>
  <main class="shadow-sm bg-white border height-100 console_article_container">
    <nav aria-label="breadcrumb" class="title-nav">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          文档管理
        </li>
        <li class="breadcrumb-item active" aria-current="page">文章</li>
      </ol>
    </nav>
    <div class="pb-2 pr-3 pl-3 pt-0 form-container border-bottom">
      <el-form :inline="true">
        <el-form-item label="日期范围:">
          <el-date-picker
            v-model="searchInfo.dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="标签选择:">
          <el-select v-model="searchInfo.tag" placeholder="请选择活动区域">
            <el-option v-for="item in tags" :key="item.id" :value="item._id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类选择:">
          <el-cascader
            v-model="searchInfo.type"
            :options="types"
            :props="{ checkStrictly: true }"
            clearable></el-cascader>
        </el-form-item>
        <el-form-item label="是否公开：">
          <el-switch v-model="searchInfo.isPublic"
            active-text="是"
            inactive-text="否"
          ></el-switch>
        </el-form-item>
        <el-form-item label="发布状态：">
          <el-switch v-model="searchInfo.published"
           active-text="已发布"
           inactive-text="未发布"></el-switch>
        </el-form-item>
        <el-form-item label="关键字：">
          <el-input v-model="searchInfo.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" plain>搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="my-0 p-3" id="main-content">
      <div class="btn-toolbar my-1 pb-1" role="toolbar" aria-label="Toolbar with button groups">
        <el-button type="primary" @click="jumpTo('/console/editor/new')">新 增</el-button>
      </div>
      <el-table :data="list" border>
        <el-table-column type="index" label="#" align="center"></el-table-column>
        <el-table-column label="标题" prop="title" align="center"></el-table-column>
        <el-table-column label="分类" prop="type.title" align="center"></el-table-column>
        <el-table-column label="作者" prop="author.username" align="center"></el-table-column>
        <el-table-column label="发布时间" prop="createdAt" align="center"></el-table-column>
        <el-table-column label="标签" prop="createdAt" align="center">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row.tags" :key="tag._id" class="tag">
              {{tag.name}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="是否发布" prop="createdAt" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isPublic? 'success': 'danger'">{{scope.row.isPublic? '是': '否'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="createdAt" align="center">
          <template slot-scope="scope">
            <div class="btn-group" role="group" aria-label="Basic example">
              <el-button type="success" plain @click="jumpTo(`/person/${$route.params.uid}/articles/${scope.row._id}`)">详情</el-button>
              <el-button type="primary" plain @click="jumpTo(`/console/editor/${scope.row._id}`)">编辑</el-button>
              <el-button type="danger" plain @click="deleteArticle(scope.row._id)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <pagination :pages = pages :getList = getList :currentPage = currentPage></pagination> -->
  </main>
</template>
<script>
// import '@fortawesome/fontawesome-free/css/all.css'
// import pagination from '../tools/pagination'
import moment from 'moment'
export default {
  components: {
    // pagination
  },
  data: function () {
    return {
      list: [],
      pages: 1,
      currentPage: 1,
      searchInfo: {
        dateRange: '',
        type: '',
        published: '',
        keyword: '',
        tag: '',
        isPublic: 0
      },
      options: [],
      tags: [],
      types: []
    }
  },
  mounted () {
    this.getList(1)
    this.getTags()
    this.getTypes()
  },
  methods: {
    getNewestList: function () {
      return ''
    },
    getHotList: function () {
      return ''
    },
    async getList (page) {
      let queryString = `page=${page}&createdBy=${this.$route.params.uid}`
      if (page) {
        this.currentPage = page
      }
      const { keyword, type } = this.$data
      if (keyword) queryString += `&keyword=${keyword}`
      if (type) queryString += `&type=${keyword}`
      try {
        const result = await this.$getAjax(`/api/articles/list?${queryString}`)
        this.list = result.docs
        this.pages = result.pages
        this.list.forEach(item => {
          item.createdAt = moment(item.createdAt * 1000).format('YYYY-MM-DD HH:mm:ss')
        })
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async getTags () {
      let tags = localStorage.getItem('tags')
      if (tags) {
        this.tags = JSON.parse(tags)
        return
      }
      try {
        const result = await this.$getAjax(`/myapi/tags?createdBy=${this.$route.params.uid}`)
        this.tags = result
        localStorage.setItem('tags', JSON.stringify(this.tags))
      } catch (err) {
        this.$message.error(err.message)
      }
    },
    async getTypes () {
      let types = localStorage.getItem('types')
      if (types) {
        this.types = JSON.parse(types)
        return
      }
      try {
        const queryString = `createdBy=${this.$route.params.uid}`
        const result = await this.$getAjax(`/myapi/articles/types/all?${queryString}`)
        this.types = result
        localStorage.setItem('types', JSON.stringify(this.types))
      } catch (err) {
        this.$message.error('获取失败')
      }
    },
    jumpTo (url) {
      this.$router.push(url)
    },
    deleteArticle (id) {
      this.$confirm('删除文章不可恢复， 确定要删除文章吗？', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(async () => {
        await this.$deleteAjax(`/api/articles/${id}`, true)
        this.$message.success('删除成功！')
        this.getList()
      })
    }
  }
}
</script>
<style scoped>
.title-nav .breadcrumb-item {
  font-weight: bold;
  font-size: 1.5rem;
}

.form-container {
  padding: 5px;
  text-align: left;
}

.form-check-label {
  font-size: 0.8rem;
}

table .el-button {
  height: 25px;
  padding: 5px 12px;
}

#page-list {
  margin-top: 0.5rem;
}
.pagination {
  margin: 0 auto;
  width: 300px;
}
.list-group-item {
  border: none;
}

.table td, th {
  vertical-align: middle;
  padding: 0.25rem;
}

.table th {
  padding: 0.75rem;
}

.el-form-item {
  margin-bottom: 0.5rem;
}

.tag {
  margin-right: 5px;
}
.height-100 {
  min-height: calc(100vh - 100px);
}
</style>
<style>
  .console_article_container .el-form--inline .el-form-item__content {
    vertical-align: baseline;
  }
</style>
