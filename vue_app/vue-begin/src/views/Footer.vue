<template>
  <div class="footer_content">
<!--    <input v-model="input_item">-->
    <Button type="primary" @click="create_list">Primary</Button>
    <li v-for="(item,index) in items" :key="index">{{item}}</li>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      input_item: '',
      items: []
    }
  },
  methods: {
    create_list: function () {
      this.items.push(this.input_item)
    }
  }
}
</script>

<style>

</style>
