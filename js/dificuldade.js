/* eslint-disable no-magic-numbers */
const buttonfacil = document.querySelector('#facil');
const resetTdAll = document.querySelectorAll('td');
// const linha = [1, 2, 3, 4];
// const coluna = [1, 2, 3, 4];
const reset = function() {
    for (let i = 0; i <= 15; i++) {
        resetTdAll[i].firstElementChild.value = '';
        if (resetTdAll[i].classList.length === 2) {
            resetTdAll[i].classList = resetTdAll[i].classList[0];
        }
    }
    /* essa função serve pra resetar todos TD's
     e tirar qualquer class q eu tenha colocado */
};
const verifica = function(localizacao, linha, coluna, numero) {
    const local = document.querySelector(localizacao);
    const classe = local.classList[0];
    const localClasseVerefica = document.querySelectorAll(`.${classe}`);
    let contadorClasse = 0;
    for (let i = 1; i <= 4; i++) {
        const localLinhaVerefica = document.querySelector(`#L${linha}C${i}`);
        if (numero === Number(localLinhaVerefica.firstElementChild.value)) {
            return false;
        }
        const localColunaVerefica = document.querySelector(`#L${i}C${coluna}`);
        if (numero === Number(localColunaVerefica.firstElementChild.value)) {
            return false;
        }
        if (numero === Number(localClasseVerefica[contadorClasse].firstElementChild.value)) {
            return false;
        }
        contadorClasse++;
    }
    return true;
    /* loucura começa aqui
        essa função eu uso pra verificar todas linhas, coluna e quadrados
        eu pego a localização, a linha, coluna e numero que vai ir no TD
        eu repito isso por 4 vezes, já que todos são um total de 4 (linhas, colunas e quadrados)
        primeiro if compara todos numeros da linha, pra ver se não há repitidos,
        o segundo compra a coluna e o terceiro os quadrados
        se tudo der certo e nenhum for repitido, ele retorna um valor verdadeiro
    */
};
buttonfacil.addEventListener('click', function() {
    /*
        quando clica no botão, a primeiro coisa q ele faz é resetar tudo
        eu declaro o verificaTrueFalse pra usar mais a frente
        eu pego a linha e colune usando o Math.random de 1 a 4
        após isso, como é o modo fácil, ele repeti isso duas vezes (o for no caso)
        no for ele pega o numero que vai colocar no TD,
        ele utiliza um while pra confirmar que os locais não são iguais, ele faz até não serem
        após isso ele usa a função verifica e dar os valores q vão ser usados nela
        se tudo der certo, vai retornar o valor true
        e depois vai adicionar o numero e uma class pra impedir que mude o valor rolando a bolinha do mouse
        caso dê errado, o i continua 0 e repeti o processo dnv
        os locais são salvos em um vetor para que não se repitam e o[locais.length - 1] serve pra sempre pegar o ultimo
    */
    reset();
    let verificaTrueFalse = true;
    const locais = [];
    let randomLinha = parseInt(Math.random()* 4 + 1);
    let randomColuna = parseInt(Math.random()* 4 + 1);
    for (let i = 0; i < 2; i++) {
        const randomNumero = parseInt(Math.random()* 4 + 1);
        while (`#L${randomLinha}C${randomColuna}` === locais[0]) {
            randomLinha = parseInt(Math.random() * 4 + 1);
            randomColuna = parseInt(Math.random() * 4 + 1);
        }
        locais.push(`#L${randomLinha}C${randomColuna}`);
        verificaTrueFalse = verifica(locais[locais.length-1], randomLinha, randomColuna, randomNumero);
        if (verificaTrueFalse) {
            document.querySelector(locais[locais.length - 1]).firstElementChild.value = randomNumero;
            document.querySelector(locais[locais.length - 1]).classList += ' random';
        } else {
            i = 0;
        }
    }
});

// console.log(`L${
//     localizaLinha[randomLinha]
// }C${
//     localizaColuna[randomColuna]
// }`);
// verificar coluna = L$C(Fixo);
// verificar linha = L(fixo)C$;
// verificar quadrado = Qua$;
