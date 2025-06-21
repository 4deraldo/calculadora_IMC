document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calcForm');
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

    // se não válidos, exibe alerta
    if (!camposValidos) {
      event.preventDefault();
      alert('Por favor preencher os campos corretamente');
      return;
    }

    // coleta os dados com FormData
    const formData = new FormData(form);
    const nome = formData.get('nome');
    const altura = parseFloat(formData.get('altura'));
    const peso = parseFloat(formData.get('peso'));

    calcularIMC(peso, altura, nome);
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
  function calcularIMC(peso, altura, nome) {
    let imc = peso / altura ** 2;
    console.log(imc.toFixed(2));

    switch (true) {
      case imc < 19.1:
        atualizarResultado(
          'blue',
          `Olá ${nome}, seu IMC é ${imc.toFixed(
            2
          )}kg/m². Você está na categoria: Abaixo do peso `
        );
        break;
      case imc >= 19.1 && imc <= 25.8:
        atualizarResultado(
          'green',
          `Olá ${nome}, seu IMC é ${imc.toFixed(
            2
          )}kg/m². Você está na categoria: Peso Normal `
        );
        break;
      case imc >= 25.9 && imc <= 27.3:
        atualizarResultado(
          'yellow',
          `Olá ${nome}, seu IMC é ${imc.toFixed(
            2
          )}kg/m². Você está na categoria: Pouco Acima do Peso `
        );
        break;
      case imc >= 27.4 && imc <= 32.3:
        atualizarResultado(
          'brown',
          `Olá ${nome}, seu IMC é ${imc.toFixed(
            2
          )}kg/m². Você está na categoria: Acima do Peso `
        );
        break;
      case imc > 32.3:
        atualizarResultado(
          'red',
          `Olá ${nome}, seu IMC é ${imc.toFixed(
            2
          )}kg/m². Você está na categoria: Obesidade `
        );
        break;

      default:
        atualizarResultado('', '');
    }
  }

  //função para limpar os resultados
  function atualizarResultado(cor, mensagem) {
    resultado.style.backgroundColor = cor;
    resultado.textContent = mensagem;
  }
});
