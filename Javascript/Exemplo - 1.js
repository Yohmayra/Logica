var produtos = 10;
var quantidade = 15;
var total = 0;
var nome = "Alex Fernando";
var sobrenome = " Egidio";
var idade = 31;

function exemplo(nome,sobrenome){
    total = ((produtos*quantidade)*5);
        console.log(total);

    if (idade==31) {
        console.log(nome);
    } 
    idade = 33;
    if (idade == 33){
        sobrenome = "Egidio";
            console.log(sobrenome);
    }
    }
exemplo(nome,sobrenome);