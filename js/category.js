$(function() {
    var JDcategory = new jdCategory();
    JDcategory.leftSlide();
    JDcategory.rightSlide();
    JDcategory.leftCeiling();

})

var jdCategory = function() {};
jdCategory.prototype = {
    leftSlide: function() {
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },
    rightSlide: function() {
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },
  leftCeiling:function() {
      // var ul=document.querySelector('.category-left ul');
      var ul=$('.category-left ul');
      // var lis=ul.children;
      var lis=ul.children();
      // console.log(lis)
      // for (var i = 0; i < lis.length; i++) {
      //   lis[i].index=i//li对象加
      //   // console.log(lis[i].index);
      //   // lis[i].setAttribute('index', i);//行内加属性
      // }
      lis.each(function(index,ele) {
        $(ele).attr('index',index)
      })
      // ul.addEventListener('click',function(e) {
      ul.on('tap',function(e) {
        // console.log(e.target);//查看捕获生效的元素
         // var li=e.target.parentNode;
         var li=$(e.target).parent();
         // console.log(li);
         // console.log(li.index);
         // var index=li.index;
         var index=li.attr('index');
         // var liHeight=li.offsetHeight;
         var liHeight=li.height();
         var distanceY=-index*liHeight;
         // var maxDistanceY=document.querySelector('.category-left').offsetHeight-ul.offsetHeight;
         var maxDistanceY=$('.category-left').height()-ul.height();
          // console.log(maxDistanceY);
          // console.log(ul.parentNode.parentNode);
         if(distanceY>maxDistanceY){
          ul.parent().parent().css('transform','translate3d(0px,'+distanceY+'px,0px)');
         }else{
          ul.parent().parent().css('transform','translate3d(0px,'+maxDistanceY+'px,0px)');
         }
         ul.parent().parent().css('transitionDuration','300ms');
         // for (var i = 0; i < lis.length; i++) {
         //   lis[i].classList.remove('active');
         // }
         // li.classList.add('active');
         lis.removeClass('active');
         li.addClass('active');
      })
  }
}
