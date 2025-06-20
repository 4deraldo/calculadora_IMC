document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calcForm');
  const nome = document.getElementById('iNome');
  const altura = document.getElementById('iAltura');
  const peso = document.getElementById('iPeso');

  form.addEventListener('submit', function (event) {
    let campos = document.querySelectorAll('.campoObrigatorio');
    let camposValidos = true;

    for (let i = 0; i < campos.length; i++) {
      let campo = campos[i];

      //verificando se campos estão vazios e marcando de vermelho no html
      if (campo.value.trim() === '') {
        campo.classList.add('erro');
        camposValidos = false;
      } else {
        campo.classList.remove('erro');
      }

      //verifica se o campo está vazio e desmarca no html
      campo.addEventListener('input', function () {
        if (campo.value.trim() !== '') {
          campo.classList.remove('erro');
        }
      });
    }

    //retira o padrão do formulario
    if (!camposValidos) {
      event.preventDefault();
      alert('Por favor preencher os campos corretamente');
    }
  });

  //função de calculo do IMC
});
