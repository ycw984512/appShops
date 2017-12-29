/*
* @Author: Marte
* @Date:   2017-12-15 16:16:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-28 17:43:49
*/

$(function() {
      // 顶部固定开始
            var navOffset=$(".nav").offset().top;
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >navOffset){
                    $(".nav").addClass("fixed");
                    $(".video").css("margin-top",84.4);
                }else{
                    $(".nav").removeClass("fixed");
                    $(".video").css("margin-top",0);
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
});

 $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                  $(this).jPlayer("setMedia", {
                        title: "Big Buck Bunny",
                        m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
                        ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                        webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
                        poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
                  });
            },
            swfPath: "js/jplayer",
            supplied: "webmv, ogv, m4v",
            size: {
                  width: "1200px",
                  height: "580px",
                  cssClass: "jp-video-360p"
            },
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
      });


})

// 返回顶部结束