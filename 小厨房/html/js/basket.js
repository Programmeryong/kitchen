$(function(){
	let top=new Vue({
        el:'#Top',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }
    })
    let main=new Vue({
        el:'#Main',
        methods:{
            jimp_html:function(message){
                location=message;
            },
        }
    })
})