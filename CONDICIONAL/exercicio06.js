let anoNascimento =parseInt(prompt("Digite o ano de nascimneto"))


let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >=18){
    console.log("maior de idade")
    console.log("sua idade é " + idade )
}
else{
    console.log("voce e menor de idade")
    console.log("sua idade é: " + idade)
}