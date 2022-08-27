window.addEventListener("load", init);
var slideIndex = 0;

function init() {
    let slideshow = [];
    for (let i = 0; i < slidesData.length; i++){
        slideshow[i] = new slides(slidesData[i][0], slidesData[i][1]);
    }

    slideshow.forEach(generateSlideshow);
    showSlides();
}
class slides {
    constructor(source, description) {
        this.description = description;
        this.source = source;
    }
}

function generateSlideshow(slides){
    let div1 = document.createElement("div");
    div1.className = "mySlides fade"
    let img = document.createElement("img");
    img.src = slides.source;
    img.alt = slides.description;
    img.style = "width:100%";
    let div2 = document.createElement("div");
    div2.className = "text"
    let div2text = document.createTextNode(slides.description);

    div2.appendChild(div2text);
    div1.appendChild(img);
    div1.appendChild(div2);
    document.getElementById("slideShow").appendChild(div1);


}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}