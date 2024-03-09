window.addEventListener('DOMContentLoaded', function() {
    var images = [
      'Belem.jpg',
      'lençois.jpg',
      'praçadopescador.jpg'
    ];
  
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    var imageUrl = "background/" + randomImage; // Substitua "/background/" pelo caminho correto para a pasta das imagens
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
  });

// Carrega o JSON contendo os usuários e senhas
fetch('scripts/usuarios.json')
  .then(response => response.json())
  .then(data => {
    // Adiciona o ouvinte de evento para o envio do formulário
    document.querySelector('.form-signin').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio do formulário

      var username = document.getElementById('nome').value;
      var password = document.getElementById('senha').value;

      // Verifica se as credenciais estão corretas comparando com os dados do JSON
      var foundUser = data.usuarios.find(user => user.usuario === username && user.senha === password);
      if (foundUser) {
        // Verifica se o checkbox "Lembre-se de mim" está marcado
        var rememberCheckbox = document.querySelector('input[type="checkbox"]');
        if (rememberCheckbox.checked) {
          // Salva os valores dos campos de usuário e senha no localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Limpa os valores salvos no localStorage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        // Define um indicador de autenticação no localStorage
        localStorage.setItem('authenticated', 'true');

        // Redireciona para a próxima página
        window.location.href = 'home.html';
      } else {
        alert('Usuário ou senha inválidos!');
      }
    });

    // Preenche os campos de usuário e senha com os valores salvos no localStorage, se existirem
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      document.getElementById('nome').value = savedUsername;
      document.getElementById('senha').value = savedPassword;
      document.querySelector('input[type="checkbox"]').checked = true; // Marca o checkbox "Lembre-se de mim"
    }
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
