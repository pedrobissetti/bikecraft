export default function initInfoProdutos() {
  const passeioContainer = document.getElementById('passeio__container');
  const esporteContainer = document.getElementById('esporte__container');
  const retroContainer = document.getElementById('retro__container');
  const infoPasseio = document.getElementById('passeio__info');
  const infoEsporte = document.getElementById('esporte__info');
  const infoRetro = document.getElementById('retro__info');
  const activeClass = 'ativo'

  function activePasseio() {
    infoPasseio.classList.toggle(activeClass);
  }
  
  function activeEsporte() {
    infoEsporte.classList.toggle(activeClass);
  }
  function activeRetro() {
    infoRetro.classList.toggle(activeClass);
  }

  passeioContainer.addEventListener('click', activePasseio);
  esporteContainer.addEventListener('click', activeEsporte);
  retroContainer.addEventListener('click', activeRetro);
}
