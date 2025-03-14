/* Crie uma classe Animal com propriedades como nome, especie e idade. Adicione
um método fazerSom que retorna o som característico do animal. Considere as
possibilidades de som para: vaca, cachorro, gato, elefante e som não identificado.
*/

class Animal{
    constructor(nome, especie, idade){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }
    fazerSom(){
        try{
            if(this.especie !== 'vaca' && this.especie !== 'cachorro' && this.especie !== 'gato'
                && this.especie !== 'elefante'
            ){
                throw `Som não identificado!`;
                
            }
            else if(this.especie === 'vaca' ){
            return `MUUUUUUU`;
            }
            else if(this.especie === 'cachorro'){
            return `AU AU`;
            }
            else if(this.especie === 'gato'){
            return `MIAU MIAU`;
            }
            else if(this.especie === 'elefante'){
            return `Fuuum uuuuh`;
            }
        }catch(error){
            console.error(`${error}`);
          
        }
        
    }
    
}

let vaca = new Animal('mimosa', 'vaca', 55);
console.log(vaca.fazerSom());
let cachorro = new Animal('bob', 'cachorro', 55);
console.log(cachorro.fazerSom());
let gato = new Animal('fred', 'gato', 55);
console.log(gato.fazerSom());
let elefante = new Animal('meni', 'elefante', 55);
console.log(elefante.fazerSom());





