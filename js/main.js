const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 900,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
});

const modal=document.querySelector('.modal');
const body = document.querySelector('body');
const buttonmodal=document.querySelector('.main-display__button');
const popupwindow=document.querySelector('.popup');
const button=document.querySelector('.modal__button');
buttonmodal.addEventListener('click',()=>{
  modal.classList.add('active');
  body.classList.add('lock');
});

modal.addEventListener('click',(e)=>{
  const ismodel=e.target.closest('.modal__inner');
  if(!ismodel){
    modal.classList.remove('active');
    body.classList.remove('lock');
  }
});
button.addEventListener('click',()=>{
  document.querySelector('.inp1').value='';
  document.querySelector('.inp2').value='';
  document.querySelector('.message').value='';
  modal.classList.remove('active');
  popupwindow.classList.add('active');
});
popupwindow.addEventListener('click',(e)=>{
  const cross=e.target.closest('.popup__close');
  if(cross){
    body.classList.remove('lock');
    popupwindow.classList.remove('active');
  }
});
function scrollTo(element){
  window.scroll({
    left:0,
    top:element.offsetTop,
    behavior:'smooth'
  })
}
var review=document.querySelector('.first_li');
var smrev=document.querySelector('#review');
review.addEventListener('click',()=>{
  scrollTo(smrev);
});

var about=document.querySelector('.second_li');
var smabout=document.querySelector('#about');
about.addEventListener('click',()=>{
  scrollTo(smabout);
});

var inf=document.querySelector('.third_li');
var footer=document.querySelector('#footer');
inf.addEventListener('click',()=>{
  scrollTo(footer);
});