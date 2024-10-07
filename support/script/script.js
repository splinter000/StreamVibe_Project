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

// Выпадающие элементы (FAQ section)
document.querySelectorAll('.plus').forEach(element => {
  element.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.classList.toggle('active');

    const img = element.querySelector('.img-switch');
    if (content.classList.contains('active')) {
        img.src = '../home/img/faq/minus.svg';
        img.alt = 'minus';
    } else {
        img.src = '../home/img/faq/plus.svg';
        img.alt = 'plus';
    }
  });
});