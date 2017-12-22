/*
* @Author: Marte
* @Date:   2017-12-11 14:20:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-15 16:57:39
*/

'use strict';

$(function() {
      // 顶部固定开始
            var navOffset=$(".nav_top").offset().top;
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >navOffset){
                    $(".nav_top").addClass("fixed");
                    $(".perv").css("margin-top",75);
                }else{
                    $(".nav_top").removeClass("fixed");
                    $(".perv").css("margin-top",0);

                }
        });
      /*顶部固定结束*/

      // nav下拉菜单开始
       $(".ul1 .personal").on("mouseenter",function(){
          $(".ul1 .personal .menu").show();
      });

        $(".ul1 .personal").on("mouseleave",function(){
          $(".ul1 .personal .menu").hide();
      });


  // nav下拉菜单结束

// 返回顶部开始

$(window).scroll(function(){
//获取窗口的滚动条的垂直位置
var s = $(window).scrollTop();
//当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
if( s > 780){
$(".go_top").fadeIn(200);
}else{
$(".go_top").fadeOut(200);
};
});


$(".go_top").click(//定义返回顶部点击向上滚动的动画
function(){$('html,body').animate({scrollTop:0},700);
})

})

// 返回顶部结束