// var i = 0;
// var images = [];
// var time = 2000;

// images[0] = "./assets/images/orogold.jpg"
// images[1] = "./assets/images/lorax.jpg"
// images[2] = "./assets/images/cargo-jort.jpeg"

// function changeImg(){
//   document.slide.src = images[i];
//   if(i < images.length -1){
//     i++
//   }else {
//     i=0
//   }
//   setTimeout("changeImg()", time)
// }

// window.onload = changeImg;
// $('')

	
$(function(){
  // console.log("asdasdas");
  $('#slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  });
  $('#cardContainer').slick({
    centerMode: true
  });
});
