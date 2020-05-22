<template>
<div>
  <div v-for="(unit,index) in list" v-bind:key="index">
        {{unit.name}} -- {{unit.code}}
      <button type="button" @click="minus(unit,index)">-</button>
      {{typeof unit.num === 'undefined' ? 0: unit.num}}
      <button type="button" @click="add(unit,index)">+</button>
  </div>
  <div v-for="(unit, index) in order" v-bind:key="index">
    名称--{{unit.name}}
    价格--{{unit.code}}
  </div>
  总价--{{order_sum}}
</div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Order',
  data () {
    return {
      list: this.$store.state.list
    }
  },
  methods: {
    // 实时加减
    minus: function (unit, index) {
      if (typeof unit.num === 'undefined') {
        unit.num = 0
      }
      unit.num--

      if (unit.num < 0) {
        unit.num = 0
      }
      this.$set(this.list, index, unit)
    },
    add: function (unit, index) {
      if (typeof unit.num === 'undefined') {
        unit.num = 0
      }
      unit.num++

      if (unit.num > 10) {
        unit.num = 10
      }
      this.$set(this.list, index, unit)
    }
  },
  // 实时监听，并且使用lodash中的_.filter方法过滤列表
  computed: {
    order: function () {
      return _.filter(this.list, function (o) {
        return o.num !== 'undifined' && o.num > 0
      })
    },
    order_sum: function () {
      let sum = 0
      _.each(this.order, function (o) {
        sum += o.code * o.num
      })
      return sum
    }
  }
}
</script>

<style scoped>

</style>
