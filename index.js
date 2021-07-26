var i=0;
var images=[];
var time = 2000;

images[0]='slide.webp';
images[1]='slide1.webp';
images[2]='slide2.webp';

images[3]='slide3.webp';
images[4]='slide4.webp';
images[5]='slide5.webp';

images[6]='slide6.webp';
images[7]='slide7.webp';
images[8]='slide8.webp';
images[9]='slide9.webp';

function sliderShow(){
    document.slide.src = images[i];

    if(i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("sliderShow()",time);
}

window.onload=sliderShow;
/******** */
function myFunction() {
  var x = document.getElementById("ustMenu");
  if (x.className === "menuAna") {
    x.className += " responsive";
  } else {
    x.className = "menuAna";
  }
}