let banner__slider = document.getElementsByClassName('banner-img');

let etape = 0;

let nbr__img = banner__slider.length;

let precedant = document.querySelector('.arrow_left');
let suivant = document.querySelector('.arrow_right');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        banner__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    banner__slider[etape].classList.add('active');
})

precedant.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    banner__slider[etape].classList.add('active');
})

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    banner__slider[etape].classList.add('active');
}, 3000)
