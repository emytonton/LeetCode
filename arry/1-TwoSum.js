function twoSum(nums, target) {
  // criamos um objeto para armazenar os números já vistos
  const vistos = {};

  // percorremos o array de números
  for (let i = 0; i < nums.length; i++) {
    // calculamos a diferença entre o target e o número atual
    const diferenca = target - nums[i];

    // verifica se essa diferença já foi vista antes
    if (vistos.hasOwnProperty(diferenca)) {
      // se sim, encontramos os dois números. Retorna os índices.
      return [vistos[diferenca], i];
    }

    // Caso contrário, armazena o número atual no objeto "vistos"
    // A chave é o valor do número, e o valor é o índice dele
    vistos[nums[i]] = i;
  }
}
