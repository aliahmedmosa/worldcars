let sliderImgArray = [{
    'src': 'img/car1.png',
    'header': 'Coborn’s',
    'descrption': 'Coborn’s features over 120 grocery, convenience, and liquor locations in the Midwest.'
}, {
    'src': 'img/car2.png',
    'header': 'Cox Automotive',
    'descrption': 'Cox Automotive is a subsidiary of Cox Enterprises, and the parent company of Autotrader, Kelley Blue Book, and Xtime.'
}, {
    'src': 'img/car3.png',
    'header': 'Kellogg’s',
    'descrption': 'Kellogg’s is another quintessential American brand. Kellogg’s six core values represent the type of employees they want to attract'
}];
let sliderImg = document.getElementById('Slideimg');
let sliderHeader = document.getElementById('sliderhead');
let sliderDescription = document.getElementById('sliderdescription');
let i = 0;
let val = sliderHeader.innerText;
//let att = sliderImg.getAttribute("src");

setInterval(function() {
    if (i == sliderImgArray.length) {
        i = 0;
    }
    sliderImg.setAttribute("src", sliderImgArray[i].src);
    sliderHeader.innerText = sliderImgArray[i].header;
    sliderDescription.innerText = sliderImgArray[i].descrption;
    i++;

}, 2000)