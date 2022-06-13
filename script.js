let total = 0;
let count = 1;

let quantidade_produtos = parseInt(prompt("Digite a Quantidade Total de Produtos da tabela deste exercicio (com exceção do vinho): "));

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
