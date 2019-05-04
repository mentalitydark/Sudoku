console.log('Main.js OK!');
const table = document.querySelector('table');
const tdall = document.querySelectorAll('td');
/*
    table e tdall servem pra eu pegar a tabela,
    já que eu adicionei o evento nela
    o tdall é pra diminuir o código,
    ao invés de fazer vários td1, td2 e cada um com um td
*/
let contador0 = 1;
let contador1 = 1;
let contador2 = 1;
let contador3 = 1;
let contador4 = 1;
let contador5 = 1;
let contador6 = 1;
let contador7 = 1;
let contador8 = 1;
let contador9 = 1;
let contador10 = 1;
let contador11 = 1;
let contador12 = 1;
let contador13 = 1;
let contador14 = 1;
let contador15 = 1;
/*
    os contadores eu poderia fazer a mesma coisa do tdall
    mas preferir eles assim
    caso queria saber como seria...
    let contador = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    e usario o mesmo principio do tdall
    contador[0]++ é igual a contador0++
    serveria pra diminuir linhas

        event.target.firstElementChild.value = contador[0];
        contador[0]++;
        if (contador[0] > 5) {
            contador[0] = 1;
            tdall[0].firstElementChild.value = '';
        }
*/
table.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        if (event.target === tdall[0]) {
            /*
                O event.target é pra pegar o elemento que o mouse está em cima
                e faz o processo de adicionar um número no output
                (firstElementChild.value)
            */
            event.target.firstElementChild.value = contador0;
            contador0++;
            if (contador0 > 5) {
                contador0 = 1;
                tdall[0].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[1]) {
            event.target.firstElementChild.value = contador1;
            contador1++;
            if (contador1 > 5) {
                contador1 = 1;
                tdall[1].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[2]) {
            event.target.firstElementChild.value = contador2;
            contador2++;
            if (contador2 > 5) {
                contador2 = 1;
                tdall[2].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[3]) {
            event.target.firstElementChild.value = contador3;
            contador3++;
            if (contador3 > 5) {
                contador3 = 1;
                tdall[3].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[4]) {
            event.target.firstElementChild.value = contador4;
            contador4++;
            if (contador4 > 5) {
                contador4 = 1;
                tdall[4].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[5]) {
            event.target.firstElementChild.value = contador5;
            contador5++;
            if (contador5 > 5) {
                contador5 = 1;
                tdall[5].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[6]) {
            event.target.firstElementChild.value = contador6;
            contador6++;
            if (contador6 > 5) {
                contador6 = 1;
                tdall[6].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[7]) {
            event.target.firstElementChild.value = contador7;
            contador7++;
            if (contador7 > 5) {
                contador7 = 1;
                tdall[7].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[8]) {
            event.target.firstElementChild.value = contador8;
            contador8++;
            if (contador8 > 5) {
                contador8 = 1;
                tdall[8].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[9]) {
            event.target.firstElementChild.value = contador9;
            contador9++;
            if (contador9 > 5) {
                contador9 = 1;
                tdall[9].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[10]) {
            event.target.firstElementChild.value = contador10;
            contador10++;
            if (contador10 > 5) {
                contador10 = 1;
                tdall[10].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[11]) {
            event.target.firstElementChild.value = contador11;
            contador11++;
            if (contador11 > 5) {
                contador11 = 1;
                tdall[11].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[12]) {
            event.target.firstElementChild.value = contador12;
            contador12++;
            if (contador12 > 5) {
                contador12 = 1;
                tdall[12].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[13]) {
            event.target.firstElementChild.value = contador13;
            contador13++;
            if (contador13 > 5) {
                contador13 = 1;
                tdall[13].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[14]) {
            event.target.firstElementChild.value = contador14;
            contador14++;
            if (contador14 > 5) {
                contador14 = 1;
                tdall[14].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[15]) {
            event.target.firstElementChild.value = contador15;
            contador15++;
            if (contador15 > 5) {
                contador15 = 1;
                tdall[15].firstElementChild.value = '';
            }
        }
    }
    /*
        Nessa parte é quando a bolinha do mouse vai para baixo,
        eu defini que o contador sempre diminui pra depois mostrar na tela
        e caso ele segue a zero (0), ele vai para o 5 e o elemento fica com nada
        ele vai pro cinco pra n acontecer erro
        caso a pessoa role a bolinha pra cima
        já que a condição do if é contador > 5
        então se já acontecer alguma rolagem
        para cima, ele volta pro 1, o contador, e o elemento continua vázio
    */
    if (event.deltaY > 0) {
        if (event.target === tdall[0]) {
            contador0--;
            event.target.firstElementChild.value = contador0;
            if (contador0 === 0) {
                contador0 = 5;
                tdall[0].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[1]) {
            contador1--;
            event.target.firstElementChild.value = contador1;
            if (contador1 === 0) {
                contador1 = 5;
                tdall[1].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[2]) {
            contador2--;
            event.target.firstElementChild.value = contador2;
            if (contador2 === 0) {
                contador2 = 5;
                tdall[2].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[3]) {
            contador3--;
            event.target.firstElementChild.value = contador3;
            if (contador3 === 0) {
                contador3 = 5;
                tdall[3].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[4]) {
            contador4--;
            event.target.firstElementChild.value = contador4;
            if (contador4 === 0) {
                contador4 = 5;
                tdall[4].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[5]) {
            contador5--;
            event.target.firstElementChild.value = contador5;
            if (contador5 === 0) {
                contador5 = 5;
                tdall[5].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[6]) {
            contador6--;
            event.target.firstElementChild.value = contador6;
            if (contador6 === 0) {
                contador6 = 5;
                tdall[6].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[7]) {
            contador7--;
            event.target.firstElementChild.value = contador7;
            if (contador7 === 0) {
                contador7 = 5;
                tdall[7].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[8]) {
            contador8--;
            event.target.firstElementChild.value = contador8;
            if (contador8 === 0) {
                contador8 = 5;
                tdall[8].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[9]) {
            contador9--;
            event.target.firstElementChild.value = contador9;
            if (contador9 === 0) {
                contador9 = 5;
                tdall[9].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[10]) {
            contador10--;
            event.target.firstElementChild.value = contador10;
            if (contador10 === 0) {
                contador10 = 5;
                tdall[10].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[11]) {
            contador11--;
            event.target.firstElementChild.value = contador11;
            if (contador11 === 0) {
                contador11 = 5;
                tdall[11].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[12]) {
            contador12--;
            event.target.firstElementChild.value = contador12;
            if (contador12 === 0) {
                contador12 = 5;
                tdall[12].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[13]) {
            contador13--;
            event.target.firstElementChild.value = contador13;
            if (contador13 === 0) {
                contador13 = 5;
                tdall[13].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[14]) {
            contador14--;
            event.target.firstElementChild.value = contador14;
            if (contador14 === 0) {
                contador14 = 5;
                tdall[14].firstElementChild.value = '';
            }
        }
        if (event.target === tdall[15]) {
            contador15--;
            event.target.firstElementChild.value = contador15;
            if (contador15 === 0) {
                contador15 = 5;
                tdall[15].firstElementChild.value = '';
            }
        }
    }
});
