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
const popupwindow=document.querySelector('.popup')
const button=document.querySelector('.modal__button')
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
