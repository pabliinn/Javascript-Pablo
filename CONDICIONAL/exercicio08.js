let peso = parseFloat(prompt("Informe seu peso (em kg): "))
let altura = parseFloat(prompt("Informe sua altura(em metros"))

let imc = peso / (altura*altura)

console.log("deu IMC é " + imc)

if(imc<18.5){
    console.log("abaixo do peso")
}
else if (imc >= 18.5 && imc <=24.9){
    console.log("peso notmal")

}
else if (imc >= 25 && imc <=29.9){
    console.log("Sobrepeso")
}

else if(imc >=30 && imc >=34.9){
    console.log("Obesidade grau 1")
}
else if(imc >=35 && imc >=39.9){
    console.log("Obesidade grau 2")
}
else {
    console.log("Obesidade grau 3")
}



