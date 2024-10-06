// Бургер меню
  const button = document.getElementById('burger');
  const element = document.getElementById('menu');
  let isVisible = false;

  button.addEventListener('click', () => {
    if (isVisible) {
        element.classList.remove('animate__fadeInDown');
        element.classList.add('animate__fadeOutUp');
        element.addEventListener('animationend', () => {
        element.classList.remove('show');
      }, { once: true });
    } 
    else {
        element.classList.add('show');
        element.classList.remove('animate__fadeOutUp');
        element.classList.add('animate__fadeInDown');
    }
    isVisible = !isVisible;
  });

// Переключение кино/шоу (Main Seection)
document.querySelector('#shows').onclick = function () {
  document.querySelector('#shows').classList.add('active');
  document.querySelector('#movies').classList.remove('active');
  document.querySelector('.main-shows').classList.remove('display');
  document.querySelector('.main-movies').classList.add('display');
}
document.querySelector('#movies').onclick = function () {
  document.querySelector('#movies').classList.add('active');
  document.querySelector('#shows').classList.remove('active');
  document.querySelector('.main-movies').classList.remove('display');
  document.querySelector('.main-shows').classList.add('display');
}