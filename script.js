document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calcForm');
  const nome = document.getElementById('iNome');
  const altura = document.getElementById('iAltura');
  const peso = document.getElementById('iPeso');
  const resultado = document.getElementById('resultado');

  let campos = document.querySelectorAll('.campoObrigatorio');
  //verificando se campos estão vazios e marcando de vermelho no html
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let camposValidos = true;

    for (let i = 0; i < campos.length; i++) {
      let campo = campos[i];

      if (campo.value.trim() === '') {
        campo.classList.add('erro');
        camposValidos = false;
      } else {
        campo.classList.remove('erro');
      }
    }

    //retira o padrão do formulario
    if (camposValidos) {
      calcularIMC(peso.value, altura.value);
    } else {
      event.preventDefault();
      alert('Por favor preencher os campos corretamente');
    }
  });

  //verifica se o campo está vazio e desmarca no html
  for (let i = 0; i < campos.length; i++) {
    let campo = campos[i];
    campo.addEventListener('input', function () {
      if (campo.value.trim() !== '') {
        campo.classList.remove('erro');
      }
    });
  }

  //função de calculo do IMC
  function calcularIMC(peso, altura) {
    let imc = peso / altura ** 2;
    console.log(imc.toFixed(2));

    switch (true) {
      case imc < 19.1:
        resultado.style.backgroundColor = 'blue';
        resultado.textContent = `Olá ${nome.value}, seu IMC é ${imc.toFixed(
          2
        )}. Você está na categoria: Abaixo do peso `;
        break;
      case imc >= 19.1 && imc <= 25.8:
        resultado.style.backgroundColor = 'green';
        resultado.textContent = `Olá ${nome.value}, seu IMC é ${imc.toFixed(
          2
        )}. Você está na categoria: Peso Normal `;
        break;
      case imc >= 25.9 && imc <= 27.3:
        resultado.style.backgroundColor = 'yellow';
        resultado.textContent = `Olá ${nome.value}, seu IMC é ${imc.toFixed(
          2
        )}. Você está na categoria: Pouco Acima do Peso `;
        break;
      case imc >= 27.4 && imc <= 32.3:
        resultado.style.backgroundColor = 'brown';
        resultado.textContent = `Olá ${nome.value}, seu IMC é ${imc.toFixed(
          2
        )}. Você está na categoria: Acima do Peso `;
        break;
      case imc > 32.3:
        resultado.style.backgroundColor = 'red';
        resultado.textContent = `Olá ${nome.value}, seu IMC é ${imc.toFixed(
          2
        )}. Você está na categoria: Obesidade `;
        break;

      default:
        atualizarResultado('', '');
    }
  }

  function atualizarResultado(cor, mensagem) {
    resultado.style.backgroundColor = cor;
    resultado.textContent = mensagem;
  }
});
