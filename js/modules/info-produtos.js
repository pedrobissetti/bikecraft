export default function initInfoProdutos() {
  const infoList = document.querySelector('.product__icone');
  const infoContainer = document.querySelector('.product__icone--info');

  function activeInfo() {
    infoContainer.classList.toggle('ativo');
  }

  infoList.addEventListener('click', activeInfo);
}
