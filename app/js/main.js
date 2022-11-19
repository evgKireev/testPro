const btnHeader = document.querySelector('.header-info__order-btn');
const btnVideo = document.querySelector('.video__btn');
const btnAuthor = document.querySelector('.author__btn');
const btnGallery = document.querySelector('.gallery__btn');
const modal = document.querySelector('.modal');
const modalOk = document.querySelector('.modal-ok');
const modalBtn = document.querySelector('.modal__form-btn');
const modalTitle = document.querySelector('.modal__form-title');
const modalCloset = document.querySelector('.modal__form-closet');

$(document).ready(function () {
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', 
      data: th.serialize(),
    }).done(function () {
      modal.classList.remove('showModal');
      modalOk.classList.add('showModal');
      setTimeout(() => {
        modalOk.classList.remove('showModal');
      }, 3000);
      setTimeout(function () {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});

function render() {
  // modalBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   modal.classList.remove('showModal');
  //   modalOk.classList.add('showModal');
  //   setTimeout(() => {
  //     modalOk.classList.remove('showModal');
  //   }, 3000);
  // });

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
