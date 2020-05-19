var app = new Vue({
    el:"#first",
    data:{
        message:"Hello Vue~"
    }
});
var app_seen = new Vue({
   el:"#second",
   data: {
       seen:true
   }
});
var app_4 = new Vue({
   el:"#app-4",
   data: {
       todos:[
           "学英语",
           "学韩语",
           "学Python"
       ]
   }
});
var app_5 = new Vue({
    el:"#app-5",
    data:{
        attribute_name:"class",
        value:"my_class"
    }
});
var app_6 = new Vue({
    el:"#app-6",
    methods:{
        date: function() {
    return Date.now()
}}
});

var app_7 = new Vue({
   el:"#app-7",
   data:{
       reply:"",
       answer:"I'm waiting your answer~"
   },
   watch:{
       reply:function (new_q,old_q) {
           //修改了answer中的值,如果更复杂一点的话可以实现更好的交互效果
            this.answer = 'Waiting for you to stop typing...'
       }
   }
});

// 注册一个组件
Vue.component(
    'my_button' ,{
        data:function () {
            return {
                count:0
            }
        },
        template:'<button v-on:click="count++">You click me {{count}} times </button>'
    }
)

new Vue({el:'#my_component'})
// 创建一个可以提供内部互动的组件
Vue.component(
    'click-model',{
        data:function () {
            return {
                postFontSize:1
            }
        },// 组件内使用函数methods~
        template:`<div class="click-model" v-bind:style="{ fontSize: postFontSize + \'em\' }">
                    <button v-on:click="add_one">click me to add fontsize~</button>
                    <p>my size will change if you click the button</p>
                  </div>`,
        methods: {
            add_one : function () {
                this.postFontSize++
        }
    }
})
// 使用组件并且定义add_one方法
var app_8 = new Vue({
    el:"#app-8"
})