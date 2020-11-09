<template>
  <div>
    <v-header></v-header>
    <main role="main" class="container">
      <div class="row">
        <v-broadside class="col-md-2 broadside"></v-broadside>
        <v-main class="col-md-9" :articleId="articleId" :article="article" v-loading='loading'></v-main>
        <v-rightside class="col-md-1" :articleId="articleId" :isAuthor="isAuthor"></v-rightside>
      </div>
    </main>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
import header from '../Header'
import broadside from '../Broadside'
import main from './Content'
import rightside from './Rightside'
import bottom from '../bottom'
import Axios from 'axios'
export default {
  components: {
    'v-broadside': broadside,
    'v-main': main,
    'v-header': header,
    'v-rightside': rightside,
    'v-bottom': bottom
  },
  data () {
    return {
      article: {
        title: '',
        updatedBy: '',
        contentHtml: '',
        updatedAt: '',
        refers: [],
        tags: [],
        types: []
      },
      isAuthor: false,
      loading: false
    }
  },
  props: ['articleId'],
  created: function () {
    this.getArticleDetail()
  },
  methods: {
    getArticleDetail () {
      const id = this.articleId
      this.loading = false
      Axios.get(`/myapi/articles/${id}`).then((result) => {
        const { content, title, updatedBy, updatedAt, createdAt, createdBy, refers, author, tags, type } = result.data.data
        const contentHtml = result.data.data.content_html
        this.article.contentHtml = contentHtml || content
        this.article.title = title
        this.article.updatedBy = updatedBy
        this.article.updatedAt = updatedAt || createdAt
        this.article.refers = refers
        this.article.tags = tags || []
        this.article.author = author
        this.isAuthor = this.uid === createdBy
        this.loading = false
        if (type) {
          this.getParentTypes(type.typeCode)
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: err.message
        })
      })
    },
    getParentTypes (type) {
      Axios.get(`/myapi/articles/types/parent?typeCode=${type}&withTitle=1`).then(res => {
        this.article.types = res.data.result
      }).catch(err => {
        this.$message.error(err.message)
      })
    }
  }
}
</script>
<style scoped>
  @media (min-width: 1400px) {
    .container {
      max-width: 1300px;
    }
  }

  .broadside {
    padding: 0;
    position: sticky;
    top: 0
  }
</style>
