<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="left">
      <div class="input-con" v-if="is_show">
        <p>请输入名字</p>
        <input v-model="unit.name">
        <p>请输入数字</p>
        <input v-model="unit.code">
        <button type="button" @click="to_confirm">确认</button>
      </div>
      <div class="confirm" v-else>
        {{unit.name}} -- {{unit.code}}
        <button type="button" @click="come_back">取消</button>
        <button type="button" @click="to_right">添加</button>
      </div>
    </div>
    <div class="right">
      <div v-for="(unit,index) in list" v-bind:key="index">
        {{unit.name}} -- {{unit.code}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      is_show: true,
      unit: {
        name: '',
        code: ''
      },
      list: []
    }
  },
  methods: {
    to_confirm: function () {
      this.is_show = false
    },
    come_back: function () {
      this.is_show = true
    },
    to_right: function () {
      // 持久化对象到内存
      this.list.push({ ...this.unit })
      // 存储数据到store中
      this.$store.commit('set_list', this.list)
      this.unit.name = ''
      this.unit.code = ''
    }
  },
  // 在切换到别的页面之后，在切换回来时也可以读取先前的数据
  mounted () {
    this.list = this.$store.state.list
  }
}

</script>

<style>
  .left {
    float: left;
    width: 40%;
  }

  .right {
    float: left;
    width: 60%;
  }
</style>
