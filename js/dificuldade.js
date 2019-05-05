/* eslint-disable no-magic-numbers */
const buttonfacil = document.querySelector('#facil');
const resetTdAll = document.querySelectorAll('td');
const buttonmedio = document.querySelector('#medio');
const buttondificil = document.querySelector('#dificil');
const buttonimpossivel = document.querySelector('#impossivel');
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
const sudoku = function(dificuldade) {
    let verificaTrueFalse = true;
    let local = '';
    let randomLinha = parseInt(Math.random() * 4 + 1);
    let randomColuna = parseInt(Math.random() * 4 + 1);
    let localAlvo = '';
    /* localAlvo pega o TD pra depois eu conseguir pegar o valor do filho dele e comprar pra ver se é vázio ou tem algo
    se tiver algo nele, o while vai pega uma nova linha e coluna e comparar dnv, vai fazer isso até achar algo que não tenha nada
    depois isso eu pego o local e deixo na forma de um ID pra usar no verificaTrueFalse
    com o local, linha, coluna e numero verificados, se for tudo true e der certo, vai adicionar o numero no TD
    caso dê errado, o i diminui pra depois aumentar e continuar no mesmo valor, (exemplo: i = 1, i - 1 = 0, i + 1 = 1 dnv)
    ele fica fazendo isso pra não chegar no numero limite que é a dificuldade (2, 4, 6 e 8)
    caso tudo dê certo, vai ficar com a tabela com tantos de numeros q foram definidos clicando no botão*/
    for (let i = 0; i < dificuldade; i++) {
        const randomNumero = parseInt(Math.random() * 4 + 1);
        localAlvo = document.querySelector(`#L${randomLinha}C${randomColuna}`);
        while (localAlvo.firstElementChild.value !== '') {
            randomLinha = parseInt(Math.random() * 4 + 1);
            randomColuna = parseInt(Math.random() * 4 + 1);
            localAlvo = document.querySelector(`#L${randomLinha}C${randomColuna}`);
        }
        local = `#L${randomLinha}C${randomColuna}`;
        verificaTrueFalse = verifica(local, randomLinha, randomColuna, randomNumero);
        if (verificaTrueFalse) {
            document.querySelector(local).firstElementChild.value = randomNumero;
            document.querySelector(local).classList += ' random';
            /* document.querySelector(local).classList += ' random'
                isso serve pra adicionar uma class ao elemento, a condição pra mudar o número requer q só tenha a classe QuaALGUMnúmero
                isso impede que possa mudar o número que foi gerado pelo programa
            */
        } else {
            i--;
        }
    }
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
        /* contadorClasse é pra usar nos Qua
        foi preciso fazer isso já que é o unico que precisa do 0 por o localClasseVerefica ser um vetor q inicia no 0
        mesmo que o número do contadorClasse fique 4 ou mais, ainda não entra no if por ser uma comparação de um numero
        com undefined*/
    }
    return true;
    /* loucura começa aqui
        essa função eu uso pra verificar todas linhas, coluna e quadrados
        eu pego a localização, a linha, coluna e numero que vai ir no TD
        eu repito isso por 4 vezes, já que todos são tem um total de 4 números(linhas, colunas e quadrados)
        primeiro if compara todos numeros da linha, pra ver se não há repitidos,
        o segundo compra a coluna e o terceiro os quadrados
        se tudo der certo e nenhum for repitido, ele retorna um valor verdadeiro
    */
};
buttonfacil.addEventListener('click', function() {
    reset();
    sudoku(2);
    /*
    a função sudoku requer uma dificuldade pra ela então por isso é preciso informar algo nos () dela
    a função reset não precisa de nada sendo informado, só "chamar" ela que uso automaticamente
    */
});
buttonmedio.addEventListener('click', function() {
    reset();
    sudoku(4);
});
buttondificil.addEventListener('click', function() {
    reset();
    sudoku(6);
});
buttonimpossivel.addEventListener('click', function() {
    reset();
    sudoku(8);
});
