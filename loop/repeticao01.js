let menu = window.prompt("Digite um número de 1 a 8 para ter acesso aos exercícios (Digite 0 para sair): ")
while (menu !== "0") {

    switch (menu) {
        case "1":
            Login()

            break;

        case "2":
            notas()

            break;

        case "3":
            pares()

            break;

        case "4":
            semana()

            break;

        case "5":
            ordem()
            break;

        case "6":
            Nascimento ()
            break;

        case "7":
            IMC()

        case "8":
            desconto ()
            break;

        default:
            console.log("Digite um número valido!")
            break;
    }

    menu = window.prompt("Digite um numero de 1 a 8 para ter acesso aos exercicios (Digite 0 para sair)")
}

function Login(){

    let login  = prompt ("Digite o seu Usuario: ")

    let senha = prompt("Digite o seu usuario: ")

    if(login == "admin" && senha == "senha123"){
        console.log("Voce nao tem permissao de acesso!!")
    }
    
}

function notas(){

    let nota01 = Number.parseFloat(prompt("Digite sua primeira nota: "))
    let nota02 = Number.parseFloat(prompt("Digite sua segunda nota: "))
    let nota03 = Number.parseFloat(prompt("Digite sua terceira nota: "))
    let nota04 = Number.parseFloat(prompt("Digite sua quarta nota: "))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    console.log("A media do aluno é: " + media)

    if (media >=7){
        console.log("Aprovado!")
    }
    
    else if (media > 5 && media < 7 ) {
        console.log("Recuperação")
    }

    else{
        console.log("Reprovado")
    }
}

function pares() {
    let numero = parseInt(prompt("Digite um numero inteiro: "))
    if (numero %2 ==0 ){
       console.log("O numero é par")
    } else {
        console.log("O numero é impar")

    }
}

function semana() {
    let semana = window.postMessage("Digite um numero de 1 a 7: ")
    switch (semana) {
        case "1":
            console.log("Domingo")
            break;

            case "2":
            console.log("Segunda-Feira")
            break;

            case "3":
            console.log("Terca-Feira")
            break;

            case "4":
            console.log("Quarta-Feira")
            break;

            case "5":
            console.log("Quinta-Feira")
            break;

            case "6":
            console.log("Sexta-Feira")
            break;

            case "7":
            console.log("Sabado")
            break;
    
        default:
            console.log("digite um ida existente da semana!")
            break;
    }
}

function ordem(){
    let numero01 = parseInt(prompt("Digite o primeiro numero: "))
    let numero02 = parseInt(prompt("Digite o segundo numero: "))
    let numero03 = parseInt(prompt("Digite o terceiro numero: "))

    if (numero01 < numero02 && numero02 < numero03){
        console.log("Os numeros estao na ordem crescente", numero01, numero02, numero03)
    } else{
        console.log("Os numeros nao estao e ordem crescente")
    }
}

function Nascimento(){
    let anoNascimento = parseInt(prompt("Digite o ano nescimento: "))

    let anoAtual = new Date().getFullYear()

    let idade = anoAtual - anoNascimento
    if (idade >=18){
        console.log("Maior de idade")
        console.log("Sua idade é: " + idade)
        console.log("Acesso liberado😎")
    } else{
        console.log("Menor de idade")
        console.log("Sua idade é: " + idade)

    }
}

function IMC(){
    let peso = parseFloat(prompt("Informe seu peso (em KG): "))
    let altura = parseFloat(prompt("Informe sua altura (em metros): "))

    let imc = peso / (altura * altura)

    console.log("Seu IMC é: " + imc.toFixed(2))

    if(imc < 18.5){
        console.log("Abaixo de peso")
    }
    else if (imc >=18.5 && imc <= 24.9){
        console.log("Peso normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        console.log("Obesidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        console.log("Obesidade grau 2")
    }
}

function desconto(){

    let valorTotal = parseFloat(prompt("Digite o valor total da compra:"))
    let desconto

    if(valorTotal<=100){
        desconto = 0
        console.log("O valor do desconto foi: " +desconto)  
    } else if(valorTotal <= 200){
        desconto = 0.1
        console.log("O valor de desconto foi: "+(desconto*100) + "%")
    } else {
        desconto=0.2
        console.log("O valor do desconto foi: "+ (desconto) +"%")
    }
    let valorFinal= valorTotal - (valorTotal*desconto)

    console.log("O valor final da compra com o desconto: R$" + valorFinal.toFixed(2))
}
















