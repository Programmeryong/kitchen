
$(function(){
    $(window).resize(function () {
        let W=$(window).width();
        let H=$(window).height();
        $(document).css({width:W,height:H});
        $('#myApp').css({which:W,height:H});

        // let cw=$('.shicai').width();
    });

    // alert(123)
    // $('#miam .container-fluid').css({marginBottom:})
	// let W=$(window).width();
	// let H=$(window).height();
    // $(document).css({width:W,height:H});
	// $('#myApp').css({which:W,height:H});
    // let cw=$('.shicai').width();
    // console.log($('.weekly_pic').width())
    // console.log($('.weekly_pic').height())
    // $('.weekly_pic div').css({width:$('.weekly_pic').width(),height:$('.weekly_pic').height()});
    // $('.one').css({width:cw/2-6});
    // console.log($('.one').width());
    // $('#myApp').touchClick(function(){
		// // console.log($(this).)
    //     alert(123)
    // })

});
//闭包手机按屏幕事件
(function(){
    let defaults={
        start:function(self,event){},
        move:function(self,event){},
        end:function(self,event){}
    };
    $.fn.touchClick=function(opts){
        if(typeof opts=="function"){
            opts=$.extend({}, defaults,{end:opts});
        }else{
            opts=$.extend({}, defaults,opts);
        }
        this.each(function(){
            let obj=$(this);
            obj.on("touchstart",function(event){
                obj.data("move",false);
                opts.start.call(this,event);
            }).on("touchmove",function(event){
                obj.data("move",true);
                opts.move.call(this,event);
            }).on("touchend",function(event){
                if(obj.data("move")){
                    return;
                }else{
                    opts.end.call(this,event);
                }
                obj.data("move",false);
            });
        });
    };
})(jQuery);


