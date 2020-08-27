import './style.scss';

(() => {

  const overlay = document.querySelector('.overlay');
  const sides = document.querySelectorAll('.side');
  const toggleSideButton = document.querySelectorAll('[data-side-toggle]');

  let isOpen = false;

  const toggleSide = (sideName) => {
    const currentSide = [...sides].find((side) => side.dataset.side === sideName);

    if ( !currentSide ) return;

    isOpen = !isOpen;
    currentSide.classList.toggle('is-open', isOpen);
    overlay.classList.toggle('is-open', isOpen);
  };

  toggleSideButton.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      toggleSide(el.dataset.sideToggle);
    });
  });

  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    isOpen = false;
    sides.forEach((el) => el.classList.remove('is-open'));
    overlay.classList.remove('is-open');
  });

})();
