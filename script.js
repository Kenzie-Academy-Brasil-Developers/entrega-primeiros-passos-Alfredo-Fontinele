// Tabela

// Produto	        Quantidade	Valor Unitário
// Refrigerante	        3           11,99
// Macarrão	            4	        6,99
// Ervilha	            3	        6,99
// Arroz	            3	        22,99
// Feijão	            2	        11,89
// Vinho	            3	        70,00

// Multiplique o valor de cada item pela quantidade e atribua 
// a uma variável (Cada total em uma variável diferente).

// Some as variáveis e atribua a uma nova variável "total".
// Teste se a variável "total" é ímpar ou par.

// Se a variável "total" for ímpar, cada amigo deverá pagar metade do 
// valor total da compra, incluindo o vinho.

// Se a variável "total" for par você pagará somente a metade e seu amigo
// pagará a metade mais o valor do vinho.

const qtd_refrigerante = parseInt(prompt("Digite a quantidade de Refrigerante: "));
const preco_refrigerante = parseFloat(prompt("Digite o preço por unidade do Refrigerante: "));

const qtd_macarrao = parseInt(prompt("Digite a quantidade de Macarrão: "));
const preco_macarrao = parseFloat(prompt("Digite o preço por unidade do Macarrão: "));

const qtd_ervilha = parseInt(prompt("Digite a quantidade de Ervilha: "));
const preco_ervilha = parseFloat(prompt("Digite o preço por unidade do Ervilha: "));

const qtd_arroz = parseInt(prompt("Digite a quantidade de Arroz: "));
const preco_arroz = parseFloat(prompt("Digite o preço por unidade do Arroz: "));

const qtd_feijao = parseInt(prompt("Digite a quantidade de Feijão: "));
const preco_feijao = parseFloat(prompt("Digite o preço por unidade do Feijão: "));

const qtd_vinho = parseInt(prompt("Digite a quantidade de Vinho: "));
const preco_vinho = parseFloat(prompt("Digite o preço por unidade do Vinho: "));

const total = (
    (qtd_refrigerante * preco_refrigerante) + 
    (qtd_macarrao * preco_macarrao) + 
    (qtd_ervilha * preco_ervilha) + 
    (qtd_arroz * preco_arroz) + 
    (qtd_feijao * preco_feijao) + 
    (qtd_vinho * preco_vinho)
);

const vinho = qtd_vinho * preco_vinho;
const metade = total / 2;

if (total % 2 == 0) {
    let voce = metade - vinho;
    let amigo = metade + vinho;
    alert(`Valor Total: R$${total} (Par)\nVocê vai pagar: R$${voce}\nSeu amigo vai pagar: R$${amigo}`);
    console.log(`Valor Total: R$${total}\nVocê vai pagar: R$${voce}\nSeu amigo vai pagar: R$${amigo}`);
} else {
    let voce = metade;
    let amigo = metade;
    alert(`Valor Total: R$${total} (Ímpar)\nVocê vai pagar: R$${voce}\nSeu amigo vai pagar: R$${amigo}`);
    console.log(`Valor Total: R$${total}\nVocê vai pagar: R$${voce}\nSeu amigo vai pagar: R$${amigo}`);
}