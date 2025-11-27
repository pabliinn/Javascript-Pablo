let nota1 = parseFloat(prompt("Informe a primeira nota: "))
let nota2 = parseFloat(prompt("Informe a segunda nota: "))
let nota3 = parseFloat(prompt("Informe a terceira nota: "))
let nota4 = parseFloat(prompt("Informe a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4
 console.log("media do aluno é: " + media)

 if(media >=7){
    console.log("aprovado")
 }
 else if (media < 7 && media >=5){
    console.log("recuperacao")
}
else{
    console.log("reprovado :(")
}


