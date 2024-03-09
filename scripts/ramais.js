// Verifique se o usuário está autenticado consultando o localStorage
var isAuthenticated = localStorage.getItem('authenticated');

if (!isAuthenticated) {
    // Se o usuário não estiver autenticado, redirecione de volta para a página de login
    window.location.href = 'index.html';
} else {
    // O usuário está autenticado, pode continuar carregando a página normalmente
}



document.getElementById("searchInput").addEventListener("keyup", function() {
    var input = this.value.toLowerCase();
    var table = document.getElementById("customers");
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].querySelectorAll("td, th"); // Seleciona células de dados e de cabeçalho
      var found = false;
  
      for (var j = 0; j < cells.length; j++) {
        var cellText = cells[j].textContent.toLowerCase();
        
        if (cellText.includes(input)) {
          found = true;
          break;
        }
      }
  
      if (found || i === 0) { // Mantém visível se for o cabeçalho da tabela ou se encontrar correspondência
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none"; // Oculta apenas as linhas de dados que não correspondem à pesquisa
      }
    }
  });
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
  