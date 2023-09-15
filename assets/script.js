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

console.log("longueur du tableau : " + slides.length);

let precedant = document.querySelector(".arrow_left");
let suivant = document.querySelector(".arrow_right")

precedant.addEventListener('click', () => {
    alert('test listener')
});
suivant.addEventListener('click', () => {
    alert('test listener')
});