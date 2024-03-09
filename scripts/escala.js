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

  function mostrarTurmas(andar) {
    // Oculta todas as turmas
    var turmas = document.getElementsByClassName("turma");
    for (var i = 0; i < turmas.length; i++) {
      turmas[i].style.display = "none";
    }
    
    // Mostra as turmas do andar selecionado
    var turmasAndar = document.getElementsByClassName("turma-" + andar);
    for (var j = 0; j < turmasAndar.length; j++) {
      turmasAndar[j].style.display = "block";
    }
  }

  // Função para gerar a escala de almoço
function gerarEscalaAlmoco() {
    // Horário inicial
    let horario = new Date("2024-01-01T11:00:00");

    // Loop para gerar as 6 turmas
    for (let i = 1; i <= 6; i++) {
        // Adiciona 25 minutos ao horário para cada turma
        let horarioFim = new Date(horario.getTime() + 25 * 60000);

        // Exibe os detalhes da turma
        console.log("Turma " + i);
        console.log("Horário: " + formatarHorario(horario) + " - " + formatarHorario(horarioFim));
        console.log("Número de pessoas: 10");

        // Atualiza o horário para a próxima turma
        horario = new Date(horarioFim);

        // Se não for a primeira turma, ajusta o horário de acordo com a intercalação
        if (i > 1) {
            // Define o intervalo de intercalação
            let intervalo = i % 2 === 0 ? 25 : 40;

            // Adiciona o intervalo ao horário
            horario = new Date(horario.getTime() + intervalo * 60000);
        }
    }
}

// Função para formatar o horário
function formatarHorario(horario) {
    return horario.getHours().toString().padStart(2, "0") + ":" + horario.getMinutes().toString().padStart(2, "0");
}

// Chamada da função para gerar a escala de almoço
gerarEscalaAlmoco();


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
