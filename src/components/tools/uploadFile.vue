<!--
 * @Author: your name
 * @Date: 2021-03-29 09:54:59
 * @LastEditTime: 2021-03-29 14:19:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nvwa\src\components\tools\uploadFile.vue
-->
<template>
  <div>
    <el-upload
      class="banner-uploader"
      :action="uploadUrl"
      accept="image/jpeg,image/png"
      name= 'img'
      :file-list="fileList"
      :data="uploadObj"
      :limit="2"
      :show-file-list="true"
      :on-preview="handleBannerPreview"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
      :on-error="handleError"
      :on-change="handleBannerChange"
      :on-success="handleBannerSuccess"
      :before-upload="beforeBannerUpload">
      <img v-if="picUrl" :src="picUrl" class="banner">
      <i v-else class="el-icon-plus banner-uploader-icon"></i>
      <div slot="tip" class="el-upload__tip">只能上传png/jpg文件，且不超过2MB, 建议上传比例 670 * 260</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
    <img :src="picUrl" width="100%" alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      uploadObj: {
        sysCode: 'JXAPP',
        md5: ''
      },
      fileList: [],
      uploadUrl: '/upload/upload/file',
      picUrl: '',
      dialogVisible: false
    }
  },
  props: ['avatar'],
  created () {
    this.picUrl = this.avatar
  },
  methods: {
    handleExceed (file, fileList) {
      this.$message({
        type: 'warn',
        message: '图片已经上传，如果置换图片，请删除后重新上传图片'
      })
    },
    handleBannerPreview () {
      this.dialogVisible = true
    },
    handleRemove (file, fileList) {
      this.dataForm.picUrl = ''
      this.picUrl = ''
    },
    handleBannerChange (file, fileList) {
      // 供重置时，清除fileList
      this.fileList = fileList
    },
    handleBannerSuccess (res, file, fileList) {
      // 上传成功后，赋值给picUrl
      // this.picUrl = global.Bsurl.picBaseUrl + res.data.url
      // file.name = 'img'
      console.log(res, '------------------->res')
      // this.dataForm.picUrl = res.result
      this.$emit('picUrlChange', res.result)
      this.picUrl = res.result
      if (fileList.length > 1) {
        fileList.splice(0, 1)
      }
    },
    // async BannerChange (file) {
    //   return new Promise(function (resolve, reject) {
    //     const fileReader = new FileReader()
    //     // 此处打印file可看到file下的raw为文件属性
    //     const spark = new SparkMD5.ArrayBuffer()
    //     // 获取文件二进制数据
    //     fileReader.readAsArrayBuffer(file)

    //     // 异步执行函数
    //     fileReader.onload = e => {
    //       spark.append(e.target.result)
    //       const md5 = spark.end()
    //       if (md5) {
    //         return resolve(md5)
    //       }
    //     }
    //   })
    // },
    async beforeBannerUpload (file) {
      const includeTypes = ['image/jpeg', 'image/png']
      console.log(file, 'file ----------------->')
      const isIncluded = includeTypes.includes(file.type)
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isIncluded) {
        this.$message.error('上传图片类型只能是 PNG/JPEG 格式!')
        return Promise.reject(new Error('上传图片类型只能是 PNG/JPEG 格式！'))
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
        return Promise.reject(new Error('上传图片大小不能超过 2MB!'))
      }
      // this.uploadObj.md5 = await this.BannerChange(file)
      return Promise.resolve()
    },
    handleError (err, file, fileList) {
      this.$message(err.message)
    }
  }
}
</script>
<style scoped>
.children {
  padding-left: 10px;
}
.hover-cursor:hover {
  cursor: pointer;
  background: aliceblue;
}
.text-50 {
  font-size: 0.5rem;
}
.width-auto {
  width: auto;
}
.banner-uploader {
  width: 50%;
  margin: auto;
}
.banner-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.banner {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
