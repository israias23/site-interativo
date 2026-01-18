let nome = document.getElementById('nome');
let email = document.getElementById('email');
let texto = document.getElementById('form3');

function enviar(){
  let info = document.getElementById('info');
  info.innerHTML = '';
  info.innerHTML += `<p>${nome.value}, contato enviado por ${email.value}.</br>Com o seguinte texto "${texto.value}"</p>`;
  info.style.color = '#aaaaaa';
  nome.value = '';
  email.value = '';
  texto.value = '';
}