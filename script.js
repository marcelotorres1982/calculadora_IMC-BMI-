// seleciona os elementos HTML
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const resultadoElement = document.querySelector('#resultado');
const diagnosticoElement = document.querySelector('#diagnostico');

// função que calcula o IMC
function calcularIMC() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(1);

    let diagnostico = '';

    if (imc < 18.5) {
        diagnostico = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        diagnostico = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        diagnostico = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        diagnostico = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 40) {
        diagnostico = 'Obesidade grau 2';
    } else {
        diagnostico = 'Obesidade grau 3';
    }

    // atualiza o resultado na página
    resultadoElement.innerHTML = `Seu IMC é ${imcArredondado} (${diagnostico})`;
    diagnosticoElement.innerHTML = diagnostico;
}

// adiciona um evento ao botão calcular
const botaoCalcular = document.querySelector('#calcular');
botaoCalcular.addEventListener('click', calcularIMC);
