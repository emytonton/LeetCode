/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // se a matriz estiver vazia, nao ha elementos unicos, entao retornamos 0.
    if (nums.length === 0) {
        return 0;
    }

    // inicializa o ponteiro 'j' em 0. este ponteiro sera responsavel por
    // armazenar a posicao do proximo elemento unico.
    let j = 0;

    // o ponteiro 'i' ira percorrer a matriz do segundo elemento ate o final.
    // comecamos de i = 1 porque o primeiro elemento (nums[0]) e sempre unico
    // (a menos que a matriz esteja vazia, o que ja foi tratado).
    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i] !== nums[j]) { // compara o elemento atual (nums[i]) com o elemento no ponteiro 'j' (nums[j]). se os elementos forem diferentes, significa que encontramos um novo elemento unico.
            
            j++; // incrementa o ponteiro 'j'. agora 'j' aponta para a proxima posicao onde um elemento unico deve ser colocado.
            
            nums[j] = nums[i]; // move o novo elemento unico (nums[i]) para a posicao j, isso sobrescreve a duplicata que estava nessa posicao (se houver).
        }
        // se nums[i] for igual a nums[j], significa que e uma duplicata.
        // neste caso, simplesmente ignoramos o elemento e o ponteiro 'i'
        // continua avancando, enquanto 'j' permanece na sua posicao atual.
        // o elemento duplicado sera sobrescrito em uma iteracao futura se
        // um novo elemento unico for encontrado.
    }

    // apos o loop, 'j' estara na posicao do ultimo elemento unico.
    // como 'j' e um indice baseado em 0, o numero total de elementos unicos
    // e 'j + 1'.
    return j + 1;
};