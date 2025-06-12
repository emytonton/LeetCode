/**
 * @param {number[]} nums // arry circular de numeros inteiros
 * @return {number} // retorna maior diferença absoluta entre os elementos adjacentes
 */
var maxAdjacentDistance = function(nums) {

    let maxDiff = 0; // armazena a maior diferença que foi encontrada ate agora
    const tamanho = nums.legth; // guarda o tamanho do arry

    //Pecorre cada elemento do arry
    for (let i = 0; i < tamanho; i++){
        const proximoIndice = ( i + 1) % tamanho; // calculamos o indice do elemento adjacente, consideranco a circularidade com o % ex: (i + 1) % tamanho = (2 + 1) % 3 = 3 % 3 = 0, Ou seja, proximoIndice = 0, que é o primeiro elemento
        const diferenca = Math.abs(nums[i] - nums[proximoIndice]); //calcula a diferença absoluta entre os elementos adjacentes
        maxDiff = Math.max(maxDiff, diferenca); //compara o tamanho das duas variaveis e armazena o maior valor

    }

    return maxDiff;
    
};