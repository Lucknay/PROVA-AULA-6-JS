const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")


 botao.addEventListener("click", function calcular (){

   const peso1 = parseFloat(peso.value)
   const altura1 = parseFloat(altura.value)


   
   
   if (isNaN(peso1) || isNaN(altura1) || altura1 <= 0 || peso1 <= 0){
       resultado.textContent = "ta doido?"
       return;
    }

    
    const IMC = peso1 / (altura1 * altura1)

    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)}`;

    if (IMC < 18.5) {
        resultado.textContent += " - Abaixo do peso";
    } else if (IMC >= 18.5 && IMC < 24.9) {
        resultado.textContent += " - Peso normal";
    } else if (IMC >= 25 && IMC < 29.9) {
        resultado.textContent += " - Sobrepeso";
    } else {
        resultado.textContent += " - Obesidade";
    }
}   
)  
