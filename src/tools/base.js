import Vue from 'vue'
export default class Base extends Vue {
  constructor () {
    super()
    this.component = {}
    this.methods = {}
  }

  created () {

  }

  init () {
    const token = localStorage.getItem('token')
  }

}
