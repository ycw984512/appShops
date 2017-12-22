/*
* @Author: Marte
* @Date:   2017-12-15 16:15:31
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-16 16:30:39
*/

$(function() {
      // 顶部固定开始
            var navOffset=$(".nav").offset().top;
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >navOffset){
                    $(".nav").addClass("fixed");
                    $(".carousel").css("margin-top",84.4);
                }else{
                    $(".nav").removeClass("fixed");
                    $(".carousel").css("margin-top",0);
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
if( s > 780){
$(".go_top").fadeIn(200);
}else{
$(".go_top").fadeOut(200);
};
});


$(".go_top").click(//定义返回顶部点击向上滚动的动画
function(){$('html,body').animate({scrollTop:0},700);
})


 var num = 0, $subbnav = $(".subnav"),$sideBarMenu = $(".subnav li");
            $sideBarMenu.each(function (index, ele) {
                num = index * 55;
                $(ele).css("background-position", "0 -"+num + "px");
            });

            var TOP = 0;
            /* 滚动效果 */
            $(window).scroll(function () {
                TOP = $(document).scrollTop();
                if(TOP >= $(".tab-1").offset().top){
                    $sideBarMenu.eq(0).addClass("current").siblings().removeClass();
                } else if(TOP >= $(".tab-2").offset().top){
                    $sideBarMenu.eq(1).addClass("current").siblings().removeClass();
                } else if(TOP >= $(".tab-3").offset().top){
                    $sideBarMenu.eq(2).addClass("current").siblings().removeClass();
                } else if(TOP >= $(".tab-4").offset().top){
                    $sideBarMenu.eq(3).addClass("current").siblings().removeClass();
                } else if(TOP > 0){
                    $subbnav.fadeIn();
                }else{
                    $subbnav.fadeOut();
                }
            });

            $sideBarMenu.click(function () {
                $("html,body").stop().animate({
                    // 给具有相同效果的元素添加 共同的样式 jd
                    "scrollTop" : $(".tab").eq($(this).index()).offset().top
                },1000);
            });
})

// 返回顶部结束