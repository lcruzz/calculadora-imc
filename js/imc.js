function imc(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso/(altura**2)

    if ((imc < 18.5)){
        document.getElementById("imc").innerHTML = `Você está abaixo do peso. Seu imc é ${imc.toFixed(2)}`
    }
    else if ((imc >= 18.5) && (imc < 25)){
        document.getElementById("imc").innerHTML = `Você está com o peso ideal. Seu imc é ${imc.toFixed(2)}`
    }
    else if ((imc >= 25) && (imc < 30)){
        document.getElementById("imc").innerHTML = `Você está com sobrepeso. Seu imc é ${imc.toFixed(2)}`
    }
    else if ((imc >= 30) && (imc < 40 )){
        document.getElementById("imc").innerHTML = `Você está obeso. Seu imc é ${imc.toFixed(2)}`
    }
    else{
        document.getElementById("imc").innerHTML = `Você está com obesidade grave. Seu imc é ${imc.toFixed(2)}`
    }
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
}