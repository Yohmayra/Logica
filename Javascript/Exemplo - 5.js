var Nota1 =prompt("Digite sua primeira nota");
var Nota2 =prompt("Digite sua segunda nota");
var Nota3 =prompt("Digite sua terceira nota");
var Nota4 =prompt("Digite sua quarta nota");

var Soma =(parseFloat(Nota1)+parseFloat(Nota2)+parseFloat(Nota3)+parseFloat
(Nota4));
var Media = Soma / 4;
    console.log("Sua média é: " + Media + "<br>");
if (Media < 7) {
    console.log("Estude mais para ser Aprovado!");  
} else {
    console.log(" Parabéns você foi Aprovado!!");
}
