function verificaMultiplosdetres(array,number){
    let contador = 0
    let retorno = ""
    for(let i = 0;i < array.length;i++){
        if(array[i] == number){
            contador++
        }
    }
    if(contador % 3 == 0 && contador != 0){
        retorno +="A quantidade de vezes que o valor aparece é múltiplo de três"
    }
    if(contador % 3 != 0 || contador == 0){
        retorno +="A quantidade de vezes que o valor aparece não é múltiplo de três"
    }
    return retorno
    
}
console.log(verificaMultiplosdetres([3,6,3,12,3,7],3))