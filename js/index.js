window.addEventListener('load',function() {
	    header();
      downTime();
      slide();

})
// 搜索功能
function header() {
	// 头部
	    var header=document.querySelector('#header');
	    // console.log(header)
       window.addEventListener('scroll', scroll);
       scroll()
       function scroll() {
       	  var scrollTop=document.documentElement.scrollTop;
       	  // console.log(scrollTop)
       	  var slide=document.querySelector('#slide');
       	  var slideWidth=slide.offsetHeight;
       	  /*console.log(slideWidth)*/
       	  var opacity=scrollTop/slideWidth
       	  /*console.log(opacity)*/
       	  if(opacity>=1){
       	  	   header.style.backgroundColor='rgba(222, 24, 27, 1)';
       	  }else{
               header.style.backgroundColor='rgba(222, 24, 27, '+opacity+')';
       	  }
       }
}
// 秒杀功能
function downTime() {
	// 倒计时
      var futureTime=Math.floor(new Date(2018,8,22,20,00,00).getTime()/1000);
      // console.log(futureTime)
      var nowTime=Math.floor(new Date().getTime()/1000)
         // console.log(nowTime)
      var time=futureTime-nowTime;
         // console.log(time)
      var spans=document.querySelectorAll('.down-time span');
      // console.log(spans)
      setInterval(function() {
      	 time--;
      	 time=time<0?7200:time;
      	 var hour=Math.floor(time/3600)
      	 var minute=Math.floor(time%3600/60)
      	 var second=Math.floor(time%60)
      	 spans[0].innerHTML=Math.floor(hour/10)
      	 spans[1].innerHTML=Math.floor(hour%10)
      	 spans[3].innerHTML=Math.floor(minute/10)
      	 spans[4].innerHTML=Math.floor(minute%10)
      	 spans[6].innerHTML=Math.floor(second/10)
      	 spans[7].innerHTML=Math.floor(second%10)
      },1000)
}
// 轮播图
function slide() {
	var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项水平(horizontal)或垂直(vertical)
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,//当用户滑动停止的时候禁止自动轮播图
        },
        loop: true, //  是否开启无缝轮播图

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
}