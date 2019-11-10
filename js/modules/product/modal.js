export default function initModal() {
  const botaoAbrir = document.querySelectorAll('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  console.log('Olá')

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(ev) {
      ev.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function cliqueForaModal(ev) {
      if (ev.target === this) {
        toggleModal(ev);
      }
    }

    botaoAbrir.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
