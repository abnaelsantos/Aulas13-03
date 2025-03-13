class Carro{
    constructor(rodas, portas, volante,cor, motor){
        this.rodas = rodas;
        this.portas = portas;
        this.volante = volante;
        this.cor = cor;
        this.motor = motor;

    }
    buzinar() {
        console.log('BI BI BI BI BIIIIII');
     
    }
}

let carroAbnael = new Carro(4,4,'preto', 'vermelho', 'V8');
let carroPatricia = new Carro(4,2, 'Azul', 'Amarelo', 'V6');

console.log(`O carro do Abnael tem ${carroAbnael.rodas} rodas e ${carroAbnael.portas} portas, com motor ${carroAbnael.motor}`);
console.log(`O carro d Patricia tem ${carroPatricia.rodas} e ${carroPatricia.rodas} rodas, com motor ${carroPatricia.motor}`);
console.log(carroAbnael.buzinar());