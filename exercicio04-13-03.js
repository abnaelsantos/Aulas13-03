/* Crie uma classe Carro com propriedades como modelo, cor, e ano. Adicione um
método mostrarDetalhes que exiba as informações do carro.
*/

class Carro{
    constructor(modelo, cor, ano){
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    mostraDetalhes(){
        console.log(`Um Carro de modelo ${this.modelo}, de cor ${this.cor}, do ano ${this.ano}`);
        return this.mostraDetalhes;
    }
    
}
let detalhes = new Carro('Honda civic', 'vinho', 2025);
detalhes.mostraDetalhes();