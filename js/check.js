/* eslint-disable no-magic-numbers */
console.log('Check.js OK!');
const button = document.querySelector('#check');
const tdAll = document.querySelectorAll('td');
button.addEventListener('click', function() {
    let checkValue = 0;
    let check = true;
    const resultado = document.querySelector('#jogo');
    for (let i = 0; i <= 15; i++) {
        const value = tdAll[i];
        checkValue += Number(value.firstElementChild.value);
        if (value.firstElementChild.value === '') {
            check = false;
        }
    }
    if (checkValue === 40 && check === true) {
        resultado.value = 'Você ganhou o jogo!';
    } else {
        resultado.value = 'Você perdeu o jogo!';
    }
});
/*
    eu fiz um check bem simples e tals, eu usei oq vc tinha me falado
    os números tinham q dar 10 em uma linha aí coloquei 40
    pq uso todas linhas ao msm tempo (10 x 4)
    o for começa no zero e vai até o 15
    o value pega o TD e dps o checkValue
    pega o valor dele mais o valor do primeiro filho do TD,
    isso se repete por 16 vezes até pegar todos valores
    se qualquer um deles, os TD's, forem sem nada
    o check fica false e isso faz com que perca o jogo também
*/
