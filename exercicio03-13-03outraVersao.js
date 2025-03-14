/* Crie uma classe ContaBancária que possui métodos para depósito e saque. Use try-
catch para capturar erros, como tentar sacar mais do que o saldo disponível.
*/

class ContaBancaria{
    constructor(nomeTitular, saldoInicial = 0){
        this.nomeTitular = nomeTitular;
        this.saldo = saldoInicial;
        
    }

    depositar(adicionarDinheiro){
        const limiteDeposito = 1000;
        
        try{
            if(adicionarDinheiro > limiteDeposito){
                throw 'Valor de deposito acima do limite diário';
            }
            this.saldo += adicionarDinheiro;
            console.log(`Foi depositado ${adicionarDinheiro} reais na conta. Saldo total ${this.saldo}`);
        }
        catch(erro){
        console.error(`${erro}`);
        }
    
    }
    sacar(sacarDinheiro){
        
        try{
            if(sacarDinheiro > this.saldo){
                throw 'Saldo insuficiente!'
            }
            
            this.saldo -= sacarDinheiro
            console.log(`Saque de ${sacarDinheiro} foi realizado com sucessso! Saldo atual de ${this.saldo}`)
        }
        catch(erro){
            console.error(`${erro}`);
        }
    }
}
let usuario = new ContaBancaria('abnael',100);
usuario.depositar(9000);
usuario.sacar(15);