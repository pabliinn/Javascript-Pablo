let menu = window.prompt("Digite um número de 1 a 8 para ter acesso aos exercícios (Digite 0 para sair): ")
while (menu !== "0") {

    switch (menu) {
        case "1":
            Login()

            break;

        case "2":
            Semana()

            break;

        case "3":
            Pares()

            break;

        case "4":
            Notas()

            break;

        case "5":
            Ordem()
            break;

        case "6":
            Nascimento ()
            break;

        case "7":
           Desconto()

        case "8":
            IMC ()
            break;

        default:
            console.log("Digite um número valido!")
            break;
    }

    menu = window.prompt("Digite um número de 1 a 8 para ter acesso aos exercícios (Digite 0 para sair): ")
}

function Login() {

    let login = prompt(" Digite o seu usuário: ")

    let senha = prompt(" Digite a sua senha: ")

    if (login == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!")
    }
    else {
        console.log("Você não tem permissão de acesso!")
    }
}

function Semana() {
    let semana = window.prompt("Digite um número de 1 a 7")
    switch (semana) {
        case "1":
            console.log("segunda-feira")

            break;

        case "2":
            console.log("terça-feira")

            break;

        case "3":
            console.log("quarta-feira")

            break;

        case "4":
            console.log("quinta-feira")

            break;

        case "5":
            console.log("sexta-feira")

            break;

        case "6":
            console.log("sábado")

            break;

        case "7":
            console.log("domingo")

            break;
        default:
            console.log("Dia inexistente")
            break;
    }
}

function Pares() {
    let numero = parseInt(prompt("Digite um número inteiro: "))

    if (numero % 2 == 0) {
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

function Notas() {
    let nota01 = Number.parseFloat(prompt("Digite sua primeira nota: "))
    let nota02 = Number.parseFloat(prompt("Digite sua segunda nota: "))
    let nota03 = Number.parseFloat(prompt("Digite sua terceira nota: "))
    let nota04 = Number.parseFloat(prompt("Digite sua quarta nota: "))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    console.log("A média do aluno é: " + media)

    if (media >= 7) {
        console.log("Aprovado!")
    }

    else if (media > 5 && media < 7) {
        console.log("Recuperação")
    }

    else {
        console.log("Reprovado!")
    }
}

function Ordem() {
    let numero01 = parseInt(prompt("Digite o primeiro número: "))
    let numero02 = parseInt(prompt("Digite o segundo número: "))
    let numero03 = parseInt(prompt("Digite o terceiro número: "))

    if (numero01 < numero02 && numero02 < numero03) {
        console.log("Os números estão em ordem crescente", numero01, numero02, numero03)
    } else {
        console.log("Os números não estão em ordem crescente")
    }
}

function Nascimento() {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

    let anoAtual = new Date().getFullYear()

    let idade = anoAtual - anoNascimento

    if (idade >= 18) {
        console.log("Maior de idade")
        console.log("Sua idade é " + idade)
    } else {
        console.log("Menor de idade")
        console.log("Sua idade é: " + idade)
    }

}

function Desconto() {
    let valorTotal = parseFloat(prompt("Digite o valor total da compra: "))

    let desconto

    if (valorTotal <= 100) {
        desconto = 0
        console.log("O valor do desconto foi: " + desconto)
    } else if (valorTotal <= 200) {
        desconto = 0.1
        console.log("O valor do desconto foi:" + (desconto * 100) + "%")
    } else {
        desconto = 0.2
        console.log("O valor de desconto foi: " + (desconto * 100) + "%")
    }

    let valorFinal = valorTotal - (valorTotal * desconto)

    console.log("O valor final da compra com o desconto: R$" + valorFinal.toFixed(2))
}

function IMC(){
    let peso = parseFloat(prompt("Informe seu peso (em KG): "))
    let altura = parseFloat(prompt("Informe sua altura (em metros): "))

    let imc = peso / (altura * altura)

    console.log("Seu IMC é : " + imc.toFixed(2))

    if (imc < 18.5) {
        console.log("Abaixo de peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
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
