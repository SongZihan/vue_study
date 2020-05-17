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
