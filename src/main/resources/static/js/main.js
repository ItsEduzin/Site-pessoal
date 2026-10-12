document.addEventListener('DOMContentLoaded', () => {

  // 1. Rolagem suave para os links do menu de navegação
  const navLinks = document.querySelectorAll('header nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Manipulação do Formulário de Contacto
  const formContato = document.getElementById('form-contato');

  if (formContato) {
    formContato.addEventListener('submit', (e) => {
      e.preventDefault();

      // Captura dos valores digitados pelo utilizador
      const nome = formContato.querySelector('input[type="text"]').value;
      const email = formContato.querySelector('input[type="email"]').value;
      const mensagem = formContato.querySelector('textarea').value;

      console.log('Dados do formulário:', { nome, email, mensagem });

      // Feedback visual temporário (antes de conectar com o Spring Boot)
      alert(`Obrigado, ${nome}! A sua mensagem foi enviada com sucesso.`);

      // Limpa os campos do formulário
      formContato.reset();
    });
  }

});