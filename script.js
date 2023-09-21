const button = document.getElementById('botao');

function calcularIMC () {
    const nome = document.getElementById('nome').value;
    const alt = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const results = document.getElementById('results');
    var IMC = 0;
    if(nome !== '' && alt !== '' && peso !== ''){
        IMC = (peso / (alt * alt)).toFixed(1);

        if (IMC < 18.5){
            results.innerHTML = 
            `        
            <p class="imc-results">
            ${nome} seu IMC é ${IMC}
            <br>
            Você está abaixo do peso</p>
            `
        } else if (IMC >= 18.5 && IMC < 24.9){
            results.innerHTML = 
            `
            <p class="imc-results">
            ${nome} seu IMC é ${IMC}
            <br>
            Você está no seu peso adequado</p>
            `
        } else if(IMC >= 25.0 && IMC < 29.9 ){
            results.innerHTML = 
            `
            <p class="imc-results">
            ${nome} seu IMC é ${IMC}
            <br>
            Você está com sobrepeso</p>
            `
        }else{
            results.innerHTML = 
            `
            <p class="imc-results">
            ${nome} seu IMC é ${IMC}
            <br>
            Você está acima do peso</p>
            `
        }
    }else{
        results.innerHTML = `
        <p class="imc-results">PREENCHA TODOS OS CAMPOS!</p>
        `
    }

}

button.addEventListener('click', calcularIMC);