var tacoImg = function() {
    var randNum = Math.floor(imagesArray.length * Math.random());

    return imagesArray[randNum];
}

var imagesArray = [
"http://i.imgur.com/wZD0NZE.gif",
"http://i.imgur.com/r0jWhNs.gif",
"http://i.imgur.com/mqqpaCD.gif",
"http://i.imgur.com/Vv9OOYs.gif",
"http://i.imgur.com/TAlLuMT.gif",
"http://i.imgur.com/NNDO6Ra.gif",
"http://i.imgur.com/GxFLkTJ.gif",
"http://i.imgur.com/ziIaYT9.gif",
"http://i.imgur.com/pKRSB8g.gif",
"http://i.imgur.com/FIlHzHn.gif",
];

var usedImages = {};
var usedImagesCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    var img = document.createElement('img');
    img.src = tacoImg();
    img.setAttribute('class', 'note');
    document.body.appendChild(img);
});
