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

// Переключение периода подписки (Subscribe section)
document.querySelector('#monthly').onclick = function () {
  document.querySelector('#monthly').classList.add('active');
  document.querySelector('#yearly').classList.remove('active');

  let monthElements = document.getElementsByClassName('month');
  for (let i = 0; i < monthElements.length; i++){
      monthElements[i].classList.remove('disabled');
  }

  let yearElements = document.getElementsByClassName('year');
  for (let i = 0; i < yearElements.length; i++){
      yearElements[i].classList.add('disabled');
  }
}
document.querySelector('#yearly').onclick = function () {
  document.querySelector('#yearly').classList.add('active');
  document.querySelector('#monthly').classList.remove('active');

  let monthElements = document.getElementsByClassName('month');
  for (let i = 0; i < monthElements.length; i++){
      monthElements[i].classList.add('disabled');
  }

  let yearElements = document.getElementsByClassName('year');
  for (let i = 0; i < yearElements.length; i++){
      yearElements[i].classList.remove('disabled');
  }
}

// Переключение информации о планах подписки(Plans Section)
document.querySelector('#basic').onclick = function () {
  document.querySelector('#basic').classList.add('active');
  document.querySelector('#standart').classList.remove('active');
  document.querySelector('#premium').classList.remove('active');

  document.querySelector('#info-basic').classList.add('show');
  document.querySelector('#info-basic').classList.remove('hide');
  document.querySelector('#info-standart').classList.add('hide');
  document.querySelector('#info-premium').classList.add('hide');
}

document.querySelector('#standart').onclick = function () {
  document.querySelector('#standart').classList.add('active');
  document.querySelector('#basic').classList.remove('active');
  document.querySelector('#premium').classList.remove('active');

  document.querySelector('#info-standart').classList.add('show');
  document.querySelector('#info-standart').classList.remove('hide');
  document.querySelector('#info-basic').classList.add('hide');
  document.querySelector('#info-premium').classList.add('hide');
}

document.querySelector('#premium').onclick = function () {
  document.querySelector('#premium').classList.add('active');
  document.querySelector('#standart').classList.remove('active');
  document.querySelector('#basic').classList.remove('active');

  document.querySelector('#info-premium').classList.add('show');
  document.querySelector('#info-premium').classList.remove('hide');
  document.querySelector('#info-basic').classList.add('hide');
  document.querySelector('#info-standart').classList.add('hide');
}