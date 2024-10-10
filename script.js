
// Seleciona o botão de pesquisa e o formulário de pesquisa
let searchBtn = document.getElementById('search-btn');
let searchForm = document.querySelector('.search-form');

// Adiciona um ouvinte de eventos ao botão de pesquisa
searchBtn.addEventListener('click', () => {
  // Alterna a classe 'active' no formulário de pesquisa
  searchForm.classList.toggle('active');
});


