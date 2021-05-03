const Menu = document.querySelector('.Menu');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

Menu.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("Transparent");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





//Movement animation
const StressedBackground = document.querySelector("#Stressed_Background");
const StressedContainer = document.querySelector("#Stressed_Container");

const AnxiousBackground = document.querySelector("#Anxious_Background");
const AnxiousContainer = document.querySelector("#Anxious_Container");

const HappyBackground = document.querySelector("#Happy_Background");
const HappyContainer = document.querySelector("#Happy_Container");

const SadBackground = document.querySelector("#Sad_Background");
const SadContainer = document.querySelector("#Sad_Container");

const AngryBackground = document.querySelector("#Angry_Background");
const AngryContainer = document.querySelector("#Angry_Container");

//Items

const StressedImage = document.querySelector("#Stressed_Shadow img");
const StressedShadow = document.querySelector("#Stressed_Shadow");
const StressedTitle = document.querySelector("#StressedTitle");

const AnxiousImage = document.querySelector("#Anxious_Shadow img");
const AnxiousShadow = document.querySelector("#Anxious_Shadow");
const AnxiousTitle = document.querySelector("#AnxiousTitle");

const HappyImage = document.querySelector("#Happy_Shadow img");
const HappyShadow = document.querySelector("#Happy_Shadow");
const HappyTitle = document.querySelector("#HappyTitle");

const SadImage = document.querySelector("#Sad_Shadow img");
const SadShadow = document.querySelector("#Sad_Shadow");
const SadTitle = document.querySelector("#SadTitle");

const AngryImage = document.querySelector("#Angry_Shadow img");
const AngryShadow = document.querySelector("#Angry_Shadow");
const AngryTitle = document.querySelector("#AngryTitle");





//Moving animation event
StressedContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    StressedBackground.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});

AnxiousContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    AnxiousBackground.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});

HappyContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    HappyBackground.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});

SadContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    SadBackground.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});

AngryContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    AngryBackground.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});



//Animate In - Stressed
StressedContainer.addEventListener('mouseenter', (e) =>{
    StressedBackground.style.transition = 'none';
//Popout
StressedTitle.style.transform = "translateZ(100px)";
StressedTitle.style.transition = '0.5s ease';

    StressedShadow.style.transform = "translateY(20px) translateZ(50px)";
    StressedShadow.style.transition = '0.5s ease';

StressedImage.style.transform = "translateY(20px)";
StressedImage.style.transition = '0.5s ease';


})
//Animate Out
StressedContainer.addEventListener('mouseleave', (e) => {
    StressedBackground.style.transition = '0.5s ease';
    StressedBackground.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    StressedTitle.style.transform = "translateZ(0px)";
    StressedTitle.style.transition = '0.5s ease';

    StressedShadow.style.transform = "translateY(0px) translateZ(0px)";
    
    StressedImage.style.transform = "translateY(0px) translateZ(0px)";
    StressedImage.style.transition = '0.5s ease';

} );


//Animate In - Anxious
AnxiousContainer.addEventListener('mouseenter', (e) =>{
    AnxiousBackground.style.transition = 'none';

//Popout
AnxiousTitle.style.transform = "translateZ(100px)";
AnxiousTitle.style.transition = '0.5s ease';

AnxiousShadow.style.transform = "translateY(20px) rotateZ(-5deg) translateZ(70px)";
AnxiousShadow.style.transition = '0.5s ease';

AnxiousImage.style.transform = "translateY(-20px) translateZ(10px)";
AnxiousImage.style.transition = '0.5s ease';


})

//Animate Out
AnxiousContainer.addEventListener('mouseleave', (e) => {
    AnxiousBackground.style.transition = '0.5s ease';
    AnxiousBackground.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    AnxiousShadow.style.transform = "translateY(0px) rotateZ(0deg) translateZ(0px)";
    AnxiousShadow.style.transition = '0.5s ease';

    AnxiousImage.style.transform = "translateZ(0px) translateY(0px)";
    AnxiousImage.style.transition = '0.5s ease';

    AnxiousTitle.style.transform = "translateZ(0px)";
AnxiousTitle.style.transition = '0.5s ease';

} );


//Animate In - Happy
HappyContainer.addEventListener('mouseenter', (e) =>{
    HappyBackground.style.transition = 'none';

//Popout
HappyTitle.style.transform = "translateZ(100px)";
HappyTitle.style.transition = '0.5s ease';

HappyShadow.style.transform = "translateY(20px) rotateZ(5deg) translateZ(70px)";
HappyShadow.style.transition = '0.5s ease';

HappyImage.style.transform = "translateY(-20px) translateZ(10px)";
HappyImage.style.transition = '0.5s ease';


})

//Animate Out
HappyContainer.addEventListener('mouseleave', (e) => {
    HappyBackground.style.transition = '0.5s ease';
    HappyBackground.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    HappyShadow.style.transform = "translateY(0px) rotateZ(0deg) translateZ(0px)";
    HappyShadow.style.transition = '0.5s ease';

    HappyImage.style.transform = "translateZ(0px) translateY(0px)";
    HappyImage.style.transition = '0.5s ease';

    HappyTitle.style.transform = "translateZ(0px)";
HappyTitle.style.transition = '0.5s ease';

} );


//Animate In - Sad
SadContainer.addEventListener('mouseenter', (e) =>{
    SadBackground.style.transition = 'none';

//Popout
SadTitle.style.transform = "translateZ(100px)";
SadTitle.style.transition = '0.5s ease';

SadShadow.style.transform = "translateY(10px) translateZ(70px)";
SadShadow.style.transition = '0.5s ease';

SadImage.style.transform = "translateY(10px) translateZ(10px)";
SadImage.style.transition = '0.5s ease';


})

//Animate Out
SadContainer.addEventListener('mouseleave', (e) => {
    SadBackground.style.transition = '0.5s ease';
    SadBackground.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    SadShadow.style.transform = "translateY(0px) rotateZ(0deg) translateZ(0px)";
    SadShadow.style.transition = '0.5s ease';

    SadImage.style.transform = "translateZ(0px) translateY(0px)";
    SadImage.style.transition = '0.5s ease';

    SadTitle.style.transform = "translateZ(0px)";
SadTitle.style.transition = '0.5s ease';

} );

//Animate In - Angry
AngryContainer.addEventListener('mouseenter', (e) =>{
    AngryBackground.style.transition = 'none';

//Popout
AngryTitle.style.transform = "translateZ(100px)";
AngryTitle.style.transition = '0.5s ease';

AngryShadow.style.transform = "translateY(20px) rotateZ(-5deg) translateZ(70px)";
AngryShadow.style.transition = '0.5s ease';

AngryImage.style.transform = "translateY(-20px) translateZ(10px)";
AngryImage.style.transition = '0.5s ease';


})

//Animate Out
AngryContainer.addEventListener('mouseleave', (e) => {
    AngryBackground.style.transition = '0.5s ease';
    AngryBackground.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    AngryShadow.style.transform = "translateY(0px) rotateZ(0deg) translateZ(0px)";
    AngryShadow.style.transition = '0.5s ease';

    AngryImage.style.transform = "translateZ(0px) translateY(0px)";
    AngryImage.style.transition = '0.5s ease';

    AngryTitle.style.transform = "translateZ(0px)";
AngryTitle.style.transition = '0.5s ease';

} );


