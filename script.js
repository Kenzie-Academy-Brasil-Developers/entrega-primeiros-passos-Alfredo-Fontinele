const qtd_Refrigerante = parseInt(prompt("Digite a quantidade de refrigerante que você comprou:"));
const valorRefrigerante = parseFloat(prompt("Digite o valor unitário do refrigerante:"));
const totalRefrigerante = (qtd_Refrigerante * valorRefrigerante);

const qtd_Macarrao = parseInt(prompt("Digite a quantidade de macarrão que você comprou:"));
const valorMacarrao = parseFloat(prompt("Digite o valor unitário do macarrão:"));
const totalMacarrao = (qtd_Refrigerante * valorRefrigerante);

const qtd_Ervilha = parseInt(prompt("Digite a quantidade de Ervilha que você comprou:"));
const valorErvilha = parseFloat(prompt("Digite o valor unitário da Ervilha:"));
const totalErvilha = (qtd_Ervilha * valorErvilha);

const qtd_Arroz = parseInt(prompt("Digite a qtd_ do Arroz que você comprou:"));
const valorArroz = parseFloat(prompt("Digite o valor unitário do Arroz:"));
const totalArroz = (qtd_Arroz * valorArroz);

const qtd_Feijao = parseInt(prompt("Digite a quantidade de Feijão que você comprou:"));
const valorFeijao = parseFloat(prompt("Digite o valor unitário do Feijão:"));
const totalFeijao = (qtd_Feijao * valorFeijao);

const qtd_Vinho = parseInt(prompt("Digite a quantidade de Vinho que você comprou:"));
const valorVinho = parseFloat(prompt("Digite o valor unitário do Vinho:"));
const totalVinho = (qtd_Vinho * valorVinho);  

const total = (totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho);
const totalSemVinho = (totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao);

if (total % 2 === 0) {
    let resultado = totalSemVinho.toFixed(2) / 2 + totalVinho;
    let metade = totalSemVinho.toFixed(2) / 2;
    console.log (`Valor Total => R$${total.toFixed(2)} (Par)\n\nVocê deverá pagar R$${metade}\nE seu amigo deve => R$${resultado}`);
    alert (`Valor Total => R$${total.toFixed(2)} (Par)\n\nVocê deverá pagar R$${metade}\nE seu amigo deve => R$${resultado}`);
} else {
    let metade = total.toFixed(2) / 2;
    console.log (`Valor Total => R$${total.toFixed(2)} (Ímpar)\n\nVocês vão dividir o valor total de vinho que é de R$${totalVinho}\nAmbos vão pagar => R$${metade}`);
    alert (`Valor Total => R$${total.toFixed(2)} (Ímpar)\n\nVocês vão dividir o valor total de vinho que é de R$${totalVinho}\nAmbos vão pagar => R$${metade}`);
}