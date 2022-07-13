const botaoLogin = document.getElementById('botao-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function verificacao() {
  if (email.value.match('tryber@teste.com') && senha.value.match('123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', verificacao);
