// Tabela

// Produto	        Quantidade	Valor Unitário
// Refrigerante	        3           11,99
// Macarrão	            4	        6,99
// Ervilha	            3	        6,99
// Arroz	            3	        22,99
// Feijão	            2	        11,89
// Vinho	            3	        70,00

// Esse algoritmo não se limita apenas aos produtos dessa tabela;
// Podem ser colocados n produtos, cada com seus respectivos preços e quantidades;
// Mas, sempre contabilizando com o preço e a quantidade de vinho que é uma const;

let total = 0;
let count = 1;

let quantidade_produtos = parseInt(prompt("Digite a Quantidade Total de Produtos da tabela deste exercicio (com exceção do vinho que já está sendo contabilizado): "));

for (let i = 0; i < quantidade_produtos; i++) {
    let produto = prompt(`Digite o nome do ${count}º Produto:`);
    let quantidade = parseInt(prompt(`Digite a Quantidade desejada de ${produto}:`));
    let preco = parseFloat(prompt(`Digite o Preço do(a) ${produto}:`));
    total += preco * quantidade;
    count++;
}

const valor_vinho = 3 * 70;
total += valor_vinho;

let metade = total / 2;

if (total % 2 === 0) {
    let voce = metade - valor_vinho;
    let amigo = metade + valor_vinho;
    alert(`\nValor Total: R$${total.toFixed(2)} ==> Valor Par\n\nVocê deverá pagar ==> R$${voce.toFixed(2)}\nSeu amigo deverá pagar ==> R$${amigo.toFixed(2)}\n`);
    console.log(`\nValor Total: R$${total.toFixed(2)} ==> Valor Par\n\nVocê deverá pagar ==> R$${voce.toFixed(2)}\nSeu amigo deverá pagar ==> R$${amigo.toFixed(2)}\n`);
} else {
    let voce = metade;
    let amigo = metade;
    alert(`\nValor Total: R$${total.toFixed(2)} ===> Valor Ímpar\n\nVocê deverá pagar ==> R$${voce.toFixed(2)}\nSeu amigo deverá pagar ==> R$${amigo.toFixed(2)}\n`);
    console.log(`\nValor Total: R$${total.toFixed(2)} ===> Valor Ímpar\n\nVocê deverá pagar ==> R$${voce.toFixed(2)}\nSeu amigo deverá pagar ==> R$${amigo.toFixed(2)}\n`);
}