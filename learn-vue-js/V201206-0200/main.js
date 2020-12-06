var vueInstance = new Vue({
    el: '#app',
    data:{
        title: 'DIen Thoai Sam Sung'
    },
    methods: {
        say: function (text){
            return 'Hello' + text;
        }

    }
});
console.log(vueInstance);
setTimeout(()=>{
    vueInstance.title = 'Dien Thoai Oop'
},3000);