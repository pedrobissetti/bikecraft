import outsideClick from './outsideclick';

export default function initMenuMobile() {
  const mobileButton = document.querySelector('.header__mobile--btn');
  const mobileMenu = document.querySelector('.header__mobile--menu');
  const eventos = ['click', 'touchstart'];

  if (mobileButton) {
    function openMenu(event) {
      mobileButton.classList.add('active');
      mobileMenu.classList.add('active');
      outsideClick(mobileMenu, eventos, () => {
        mobileMenu.classList.remove('active');
        mobileButton.classList.remove('active');
      })
    }

    eventos.forEach(evento => {
      mobileButton.addEventListener(evento, openMenu);
    });
  }
}