/*const dobroDoNum= function(numero){ /foi atribuida ao uma variavél/ 

    return numero * 2
}
const dobro = dobroDoNum(3)
console.log(dobro)*/

 //!FUNCOES DE ALTA ORDEM//

 /*const numbers = [40,34,67,89,23,10]

 numbers.forEach((item,index, arraycompletily)=>{
     console.log(index,item)
     console.log(arraycompletily)
 })*/

const pessoas =[
    {
        nome:'pedro',
        id: 20,
        alt:1.75
    },
    {
        nome:'paulo',
        id: 28,
        alt:1.80
    },
    {
        nome:'pietro',
        id: 29,
        alt:1.78
    },
    {
        nome:'pool',
        id: 29,
        alt:1.58
    }

]

/*const pessoaEncontrada= pessoas.find(
    (pessoa) => pessoa.id > 20 && pessoa.alt < 1.70
)

console.log(pessoaEncontrada)
 

const indicePessoaEncontrada= pessoas.findIndex(
    (pessoa) => pessoa.id > 20 && pessoa.alt < 1.70
)

console.log(indicePessoaEncontrada)
 */


const todosMaiorDeIdade= pessoas.every((pessoa)  => pessoa.id >=  18)
console.log(todosMaiorDeIdade)