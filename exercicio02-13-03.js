/*Crie uma classe Estoque que contém um método para adicionar e subtrair
quantidade de produtos. Use try-catch para garantir que a quantidade não se torne
negativa.
*/
class Estoque{
    constructor(nomeProduto, quantidade){
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }
    adicionar(quantidade){
        try{
            if(quantidade < 0){
                throw 'A quantidade não pode se negativa';
                
            }
            this.quantidade += quantidade;
            console.log(`Adicionado ${quantidade} unidades. Total ${this.quantidade}`);
        }
        catch(erro){
            console.error(erro);
        }
    }
    subtrair(quantidade){
        try{
            if(quantidade < 0 ){
                throw 'A quantide a ser subtraída não pode ser negativa.';
            }
            if(this.quantidade - quantidade < 0){
                throw 'Não há estoque suficiente.';
            }
            this.quantidade -= quantidade;
            console.log(`Foi subtraído ${quantidade} unidades. Total ${this.quantidade}`);
        }
        catch(erro){
            console.error(erro);
        }
    }
}
let estoque = new Estoque ('Calca', 4500);
estoque.adicionar(100);
estoque.subtrair(423);