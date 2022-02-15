
const calcular = document.getElementById('calcular');


//CRIAR FUNÇÃO CALCULAR
function calcImc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //VALIDAÇÃO SIMPLES

    if(nome !== '' && altura !== '' && peso !== ''){
     
        const valorCalc = (peso / (altura * altura)).toFixed(2);

        let classific = "";

        if(valorCalc < 18.5){
            classific = "Abaixo do peso! Vc ta raquitíco (a)...bora comer direito!";
        }else if(valorCalc <25){
            classific = 'com peso ideal! Continue assim.';
        }else if(valorCalc <30){
            classific = 'levemente acima do peso! Fique esperto';
        }else if(valorCalc <35){
            classific = 'com obesidade grau 1! Tu ta ficando gordo!';
        }else if(valorCalc <40){
            classific = 'com obesidade grau 2! Tu quer morrer?!!!';
        }




        resultado.textContent = `${nome} seu IMC é ${valorCalc} e você esta ${classific}`;

    }else{
       resultado.textContent = 'Preencha todos campos';
    }
}

calcular.addEventListener('click', calcImc);
