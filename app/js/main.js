const btnHeader = document.querySelector('.header-info__order-btn');
const btnVideo = document.querySelector('.video__btn');
const btnAuthor = document.querySelector('.author__btn');
const btnGallery = document.querySelector('.gallery__btn');
const modal = document.querySelector('.modal');
const modalOk = document.querySelector('.modal-ok');
const modalBtn = document.querySelector('.modal__form-btn');
const modalTitle = document.querySelector('.modal__form-title');
const modalCloset = document.querySelector('.modal__form-closet');

function render() {
  modalCloset.addEventListener('click', () => {
    modal.classList.remove('showModal');
  });

  btnHeader.addEventListener('click', () => {
    modal.classList.add('showModal');
    modalTitle.textContent = 'Забрать курс и гайд ';
    modalBtn.textContent = 'Забрать курс и гайд ';
  });
  btnVideo.addEventListener('click', () => {
    modal.classList.add('showModal');
    modalTitle.textContent = 'Начать зарабатывать';
    modalBtn.textContent = 'Начать зарабатывать';
  });
  btnAuthor.addEventListener('click', () => {
    modal.classList.add('showModal');
    modalTitle.textContent = 'Забрать курс';
    modalBtn.textContent = 'Забрать курс';
  });
  btnGallery.addEventListener('click', () => {
    modal.classList.add('showModal');
    modalTitle.textContent = 'Стать участником сообщества';
    modalBtn.textContent = 'Стать участником сообщества';
  });
}

render();
