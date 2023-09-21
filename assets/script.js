let banner__slider = document.getElementsByClassName('banner-img');
slides = [
  {
      "image":"assets/images/slideshow/slide1.jpg",
      "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
      "image":"assets/images/slideshow/slide2.jpg",
      "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
      "image":"assets/images/slideshow/slide3.jpg",
      "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
      "image":"assets/images/slideshow/slide4.png",
      "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }


]

let etape = 0;

let precedant = document.querySelector('.arrow_left');
let suivant = document.querySelector('.arrow_right');



function enleverActiveImages() {
    for(let i = 0 ; i < banner__slider.length ; i++) {
        banner__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= banner__slider.length) {
        etape = 0;
    }
    enleverActiveImages();
    banner__slider[etape].classList.add('active');
    ChangeDot(1);
})

precedant.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = banner__slider.length - 1;
    }
    enleverActiveImages();
    banner__slider[etape].classList.add('active');
    ChangeDot(-1);
})

setInterval(function() {
    etape++;
    if(etape >= banner__slider.length) {
        etape = 0;
    }
    enleverActiveImages();
    banner__slider[etape].classList.add('active');
}, 3000)



let bullet = `<div class="dot"></div>`;

let dots = document.querySelector(".dots");
dots.innerHTML=`${bullet.repeat(slides.length)}`;
dots.firstChild.className= "dot dot_selected";


let bulletSelected = 0;
function ChangeDot(sens){
	bulletSelected = bulletSelected + sens;
	bulletPrecedent = bulletSelected - sens

	if(bulletSelected > dots.childNodes.length -1){
		bulletSelected = 0;
	}
	if(bulletSelected < 0 ){
		bulletSelected = dots.childNodes.length -1
	}

	console.log(dots.childNodes[bulletSelected]);
	dots.childNodes[bulletPrecedent].className="dot"
	dots.childNodes[bulletSelected].className="dot dot_selected"
}

setInterval("ChangeDot(1)", 3000);
