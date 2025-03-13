/*Crie uma classe Produto com propriedades nome, preco e desconto. Crie um
método para calcular o preço com desconto, e use try-catch para capturar erros se o
desconto for maior que 100%.
*/

class Produto{
    constructor(nome, preco, desconto){
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    calcularValorDesconto(){
        try{
            if(this.desconto > 100){
                throw new Error("O desconto deve estar entre 0% e 100%.");
            }
            const precoComDesconto = this.preco * (1- this.desconto / 100);
            return precoComDesconto.toFixed(2);
        }catch(mensagemDeError){
            console.error(` ${mensagemDeError}`);
            return null;
            
        }
    }
}
let valorFinal = new Produto('Arroz',35.99, 15 );
console.log(`${valorFinal.calcularValorDesconto()}`);