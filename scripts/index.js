// Seleciona o input checkbox e o body
const toggleSwitch = document.querySelector('#darkModeToggle');
const currentTheme = localStorage.getItem('theme');

// Verifica se existe um tema salvo no localStorage

    // Se o tema salvo for escuro, deixa o checkbox marcado
    if (currentTheme === 'dark-mode') {
        document.body.classList.add(currentTheme);
        toggleSwitch.checked = true;
    }


// Função para alternar o tema baseado no estado do input
function switchTheme(event) {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Salva preferência
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // Salva preferência
    }
}
// Escuta as mudanças no input checkbox
toggleSwitch.addEventListener('change', switchTheme, false);

//Menu de Hamburguer
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const sidebarClose = document.getElementById('sidebarClose');
  const links = document.querySelectorAll('.menu a');
  const pages = document.querySelectorAll('.section');
 
  function openMenu(){
    overlay.classList.add('show');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu(){
    overlay.classList.remove('show');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  hamburger.addEventListener('click', () => {
    overlay.classList.contains('show') ? closeMenu() : openMenu();
  });
  sidebarClose.addEventListener('click', closeMenu);
  // fecha ao clicar fora do card (no overlay), mas não ao clicar dentro dele
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });
 
  // 4/5. Troca de seção ao clicar + fecha o menu + marca link ativo
  function goToPage(pageId){
    pages.forEach(p => p.classList.toggle('active', p.id === pageId));
    links.forEach(a => a.classList.toggle('active', a.dataset.page === pageId));
    history.replaceState(null, '', '#' + pageId); // 6. opcional: sincroniza com a URL
  }
 
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToPage(link.dataset.page);
      closeMenu();
    });
  });
 
  // 6. Ao carregar a página, respeita o hash da URL (ex: site.html#contato)
  window.addEventListener('DOMContentLoaded', () => {
    const hash = location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      goToPage(hash);
    }
  });