function imc(){
    let altura = +document.querySelector("#altura").value
    let peso = +document.querySelector("#peso").value
    let imc = peso/(altura**2)

    if ((imc < 18.5)){
        document.querySelector("#imc").innerHTML = `Você está abaixo do peso. Seu imc é ${imc.toFixed(2)}`
    }
    else if ((imc >= 18.5) && (imc < 25)){
        document.querySelector("#imc").innerHTML = `Você está com o peso ideal. Seu imc é ${imc.toFixed(2)}`
    }
    else if ((imc >= 25) && (imc < 30)){
        document.querySelector("#imc").innerHTML = `Você está com sobrepeso. Seu imc é ${imc.toFixed(2)}`
    }
    else if ((imc >= 30) && (imc < 40 )){
        document.querySelector("#imc").innerHTML = `Você está obeso. Seu imc é ${imc.toFixed(2)}`
    }
    else{
        document.querySelector("#imc").innerHTML = `Você está com obesidade grave. Seu imc é ${imc.toFixed(2)}`
    }
    
    document.querySelector("#altura").value = ""
    document.querySelector("#peso").value = ""
}

function altura() {
    let input = document.querySelector("#altura")
    let tamanho = input.value.length
    
    if (tamanho === 1){
        input.value += '.'
    }
}
