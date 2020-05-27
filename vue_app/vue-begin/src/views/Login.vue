<template>
    <div>
      用户名:<input v-model="username">
      密码: <input type="password" v-model="pwd">
      <button @click="i_login">登录</button>
      <button @click="get_data">获取登录数据</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      pwd: ''
    }
  },
  methods: {
    i_login: function () {
      // 前面应该加一些验证语句
      this.$axios.post('http://localhost:5000/check_login',
        { user_name: this.username, passwd: this.pwd })
        .then(function (response) {
          console.log('---')
          console.log(response)
        })
        .catch(function (error) {
          console.log('***')
          console.log(error)
        })
    },
    get_data: function () {
      this.$axios.get('http://localhost:5000/login_data')
        .then((response) => { console.log('i getted data~' + response) })
        .catch((error) => { console.log('i dont getted data~' + error) })
    }
  }
}
</script>

<style scoped>

</style>
