const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

// Inicialização do tamanho da senha
sizePassword.innerHTML = sliderElement.value;

// Atualiza o tamanho da senha ao mover o controle deslizante
sliderElement.addEventListener('input', function() {
  sizePassword.innerHTML = this.value;
});

// Gera uma senha com base no tamanho selecionado
function generatePassword() {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

// Copia a senha gerada para a área de transferência
function copyPassword() {
  navigator.clipboard.writeText(novaSenha)
    .then(() => {
      alert("Senha copiada com sucesso!");
    })
    .catch(err => {
      console.error('Erro ao copiar senha para área de transferência:', err);
    });
}

// Evento ao clicar no botão "Gerar senha"
buttonElement.addEventListener('click', generatePassword);

// Evento ao clicar na senha gerada para copiá-la
password.addEventListener('click', copyPassword);
