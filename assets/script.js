let slides = [
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

  document.querySelector(".txt-un").innerHTML= slides[0].tagLine;
  document.querySelector(".txt-deux").innerHTML= slides[1].tagLine;
  document.querySelector(".txt-trois").innerHTML= slides[2].tagLine;
  document.querySelector(".txt-quatre").innerHTML= slides[3].tagLine;

  document.querySelector(".img-un").src= slides[0].image;
  document.querySelector(".img-deux").src= slides[1].image;
  document.querySelector(".img-trois").src= slides[2].image;
  document.querySelector(".img-quatre").src= slides[3].image;


  banner__slider = document.getElementsByClassName('banner-img')
  banner__txt = document.getElementsByClassName('banner-txt');



  let etape = 0;

  let precedant = document.querySelector('.arrow_left');
  let suivant = document.querySelector('.arrow_right');



  function enleverActiveImages() {
      for(let i = 0 ; i < slides.length ; i++) {
          banner__slider[i].classList.remove('active');
      }
  };

  function enleverActiveTexte() {
    for(let i = 0 ; i < slides.length ; i++) {
        banner__txt[i].classList.remove('active');
    }
};

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



  suivant.addEventListener('click', function() {
      etape++;
      if(etape >= slides.length) {
          etape = 0;
      }
      enleverActiveImages();
      banner__slider[etape].classList.add('active');

      enleverActiveTexte();
      banner__txt[etape].classList.add('active');

      ChangeDot(1);

  })

  precedant.addEventListener('click', function() {
      etape--;
      if(etape < 0) {
          etape = slides.length - 1;
      }
      enleverActiveImages();
      banner__slider[etape].classList.add('active');

    enleverActiveTexte();
    banner__txt[etape].classList.add('active');

      ChangeDot(-1);
  })

  setInterval(function() {
      etape++;
      if(etape >= slides.length) {
          etape = 0;
      }

      enleverActiveImages();
      banner__slider[etape].classList.add('active');

    enleverActiveTexte();
    banner__txt[etape].classList.add('active');

  }, 3000)



  let bullet = '<div class="dot"></div>';

  let dots = document.querySelector(".dots");
  dots.innerHTML=bullet.repeat(slides.length);
  dots.firstChild.className= "dot dot_selected";

  setInterval("ChangeDot(1)", 3000);