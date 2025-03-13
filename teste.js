let texto = 'meu nome é Abnael';
console.log('ele disse!',texto);
console.log(`ele disse! ${texto}`);

try{
    let numeros = [23,56,56];
    console.log(numeros[4].toFixed(2));
}catch(error){
    console.error(` o erro foi ${error}`)
}
console.log('ele disse!',texto);
console.log(`ele disse! ${texto}`);

let carro = {
    rodas: 4,
    portas: 4,
    motor: 'V8',
    volante: 'preto',
    cor: 'vermelho',
    andar: function(){
        console.log('ocarro está andando.');
    },
    buzinar: function(){
        console.log('Buzinaaaaaa');
    }

}
console.log(`A cor do carro é ${carro.cor}`);
carro.cor = 'Vinho';
console.log(`Agora a cor do carro é: ${carro.cor}`);
carro.chassi = 4561223266;
console.log(`O chassi do carro é ${carro.chassi}`);
console.log(`Acor do carro é ${carro.cor} e o motor é ${carro.motor}`);
delete carro.volante;
//console.log(carro);
carro.andar();
carro.buzinar();