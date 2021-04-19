


const Nav = document.querySelector('.nav-links');
const SlideshowFace = document.querySelector('.Slides');
const MoodFace = document.querySelector('#FaceAnimation');
const MoodImage = document.querySelector('#OtherImage');
const Application = document.querySelector('#Application');
const BlogLink = document.querySelector('.PostContainer');

const tl = new TimelineMax();

tl.fromTo(Nav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "=1")
.fromTo(MoodFace, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-1")
.fromTo(MoodImage, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-0.5")
.fromTo(Application, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-1.5")
.fromTo(BlogLink, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-1.5")



.fromTo(StressedContainer, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-1.5")
.fromTo(AnxiousContainer, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-1.2")
.fromTo(HappyContainer, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-0.9")
.fromTo(SadContainer, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-0.6")
.fromTo(AngryContainer, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-0.4")
.fromTo(SlideshowFace, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-2.4")

