/*
* @Author: Marte
* @Date:   2017-12-15 16:16:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-22 15:31:16
*/

$(function() {
      // 顶部固定开始
            var navOffset=$(".nav").offset().top;
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >navOffset){
                    $(".nav").addClass("fixed");
                    $(".silde").css("margin-top",84.4);
                }else{
                    $(".nav").removeClass("fixed");
                    $(".silde").css("margin-top",0);
                }
        });
      // 顶部固定结束

      // 轮播图时间控制开始
      $('.carousel').carousel({
  interval: 2000
})
      // 轮播图时间控制结束


// 返回顶部开始
$(window).scroll(function(){
//获取窗口的滚动条的垂直位置
var s = $(window).scrollTop();

//当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
if( s >0){
$(".box_os").fadeIn(200);
}else{
$(".box_os").fadeOut(200);
};

$(".box_os").animate({
  "top":s+100
},20)
});


$(".ico_gt").click(//定义返回顶部点击向上滚动的动画
function(){$('html,body').animate({scrollTop:0},700);
})


$(".os_x").on("click",function(){
    $(".box_os").hide(2000);
  });

})

// 返回顶部结束