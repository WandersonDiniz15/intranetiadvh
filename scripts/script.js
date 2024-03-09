
// Verifique se o usuário está autenticado consultando o localStorage
var isAuthenticated = localStorage.getItem('authenticated');

if (!isAuthenticated) {
    // Se o usuário não estiver autenticado, redirecione de volta para a página de login
    window.location.href = 'index.html';
} else {
    // O usuário está autenticado, pode continuar carregando a página normalmente
}

// Script para o menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuItems.contains(event.target);
    const isClickInsideToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideToggle) {
      menuToggle.classList.remove('active');
      menuItems.classList.remove('show');
    } else if (isClickInsideToggle) {
      menuToggle.classList.toggle('active');
      menuItems.classList.toggle('show');
    }
  });
});

// Script para o slide do banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

setInterval(function() {
  plusDivs(1);
}, 3000);


//



// Script para o slide de Aniversariante do Mês
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Altera a imagem a cada 2 segundos
}

// Script para a contagem de cliques
let clickCount = [0, 0, 0, 0];

function handleClick(index) {
  const countElement = document.getElementById(`count${index}`);
  let count = parseInt(countElement.textContent);
  count++;
  countElement.textContent = count;

  // Array de emojis de feliz aniversário
  const emojis = ["🎉", "🎈", "🎁", "🎂", "🥳"];

  // Criar vários elementos de emoji
  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * window.innerWidth + 'px'; // Posição horizontal aleatória na janela do navegador
emoji.style.top = Math.random() * window.innerHeight + 'px'; // Posição vertical aleatória na janela do navegador

    
    // Posição inicial acima da barra de navegação
    emoji.style.animationDelay = Math.random() * 2 + 's';

    // Adicionar os emojis à barra de navegação
    const navBar = document.querySelector('.navbar');
    navBar.appendChild(emoji);


    // Remover emojis após a animação
    setTimeout(() => {
      emoji.style.opacity = '0'; // Tornar o emoji transparente
      setTimeout(() => {
        emoji.remove(); // Remover o emoji após a transição de opacidade
      }, 1000);
    }, 3000);
  }

  // Atualizar contagem no armazenamento local
  clickCount[index - 1] = count;
  setLocalStorage(`count${index}`, count);
}

// Funções para armazenamento local
function setLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

function getLocalStorage(name) {
  return localStorage.getItem(name);
}

// Restaurar contagem de cliques do armazenamento local
for (let i = 1; i <= 4; i++) {
  const count = getLocalStorage(`count${i}`);
  if (count !== null) {
    clickCount[i - 1] = parseInt(count);
    document.getElementById(`count${i}`).textContent = count;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Adiciona um ouvinte de evento ao botão de logout
  document.getElementById('logoutButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que o link seja seguido

    // Limpa as informações de sessão (ou qualquer outra coisa que você esteja usando para autenticação)
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('authenticated');

    // Redireciona o usuário para a página de login ou outra página relevante
    window.location.href = 'index.html'; // Redireciona para a página de login
  });
});
