require('devbox-linq');

var listaNumeros = [1, 6, 2, 5, 9, 6];
var listaNumerosMaioresQueCinco = listaNumeros.Where(x => x > 5);
var listaOrdenada = listaNumeros.OrderBy(x => x).ToList();
var listaOrdenadaDecrescente = listaNumeros.OrderByDesc(x => x).ToList();
var soma = listaNumeros.Sum(x => x);
var distinct = listaNumeros.Distinct(x => x);
var possuiAlgumNumeroCinco = listaNumeros.Any(x => x == 5);
var todosOsNumerosSaoCinco = listaNumeros.All(x => x == 5);

console.log('listaNumerosMaioresQueCinco');
console.log(listaNumerosMaioresQueCinco);

console.log('listaOrdenada');
console.log(listaOrdenada);

console.log('listaOrdenadaDecrescente');
console.log(listaOrdenadaDecrescente);

console.log('soma');
console.log(soma);

console.log('distinct');
console.log(distinct);

console.log('possuiAlgumNumeroCinco');
console.log(possuiAlgumNumeroCinco);

console.log('todosOsNumerosSaoCinco');
console.log(todosOsNumerosSaoCinco);