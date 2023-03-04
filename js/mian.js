"use strict";

//------------------
//FUNCTIONS
//------------------

//RIEPMPIMENTO BOARD    
function fullBoard(cnt, numMax, lv){
    for(let i = 1; i <= numMax; i++){
        const createdElement = myCreateEl('div', 'cell', i, lv);
        appendElement(cnt, createdElement);
    }
}
// CREAZIONE ELEMENTO
function myCreateEl(tagEl, classEl, i, level){
    const element = document.createElement(tagEl);  //creazione div class= cell
    element.classList.add(classEl);
    element.classList.add(level);
    element.innerText = i;
    element.addEventListener('click', function clickCell(){
        //bombCheck(element, bombe, i);
        if (bombCheck(element, bombe, i) === false){
            for(let y = 0; y < bombe.length; y++){

            }
        }
    })
    return element;
    
}

//APPEND CONTAINER
function appendElement(containerEl, sonEl){
    containerEl.append(sonEl);
}

// ARRAY GENERATOR
function generaBombe(arrayVuoto, numMax){
    while (arrayVuoto.length < 16){
        const randomNumber = getRandomNumber(numMax);
        if (!(arrayVuoto.includes(randomNumber))){
            arrayVuoto.push(randomNumber);
        }
    }
    return arrayVuoto;
}

// RANDOM NUMBER GENERATOR
function getRandomNumber(numMax){
    const randomNum = Math.floor(Math.random() * numMax) +1 ;
    return randomNum;
}

//CHECK ARRAY & CELL NUMBER
function bombCheck(element, arraybombe, i){
    const scoreTxt = document.getElementById('score');
    if((arraybombe.includes(i) === false) && (clickEnable === true)){
        element.classList.add('colorbgright');
        score++;
        scoreTxt.innerHTML = (`Il tuo punteggio e ${score}`);
        if (score === (numberOfCells - arraybombe.length)){
            scoreTxt.innerHTML = (`HAI VINTO!! il tuo punteggio e ${score}`);
            clickEnable = false;
        }
    } else if((arraybombe.includes(i) === true) && (clickEnable === true)){
        element.classList.add('colorbgbomb');
        scoreTxt.innerHTML = (`HAI PERSO!!`);
        clickEnable = false;
        return false;
    }
    
}
//------------------
//MAIN
//------------------
const cellBoard = document.querySelector('.board');

const button = document.getElementById("start");

const select = document.getElementById("levels");

let bombe = [];

let score = 0;

let numberOfCells;

let clickEnable = true;

//creazione tabella
button.addEventListener('click',
    function(){
        // variabili per cambiare numero caselle e assegnare classe con dimsensioni diverse
        let classLV;
        switch (select.value) {
            case 'lv1':
                classLV = 'lv1';
                numberOfCells = 100;
                break;
            case 'lv2':
                classLV = 'lv2';
                numberOfCells = 81;
                break;
            case 'lv3':
                classLV = 'lv3';
                numberOfCells = 49;
                break;
        }
        clickEnable = true;
        score = 0;
        cellBoard.innerHTML = ''; // reset board
        // ARRAY BOMBS
        
        bombe = generaBombe(bombe, numberOfCells);
        console.log(bombe);
        //riempimento board
        fullBoard(cellBoard, numberOfCells, classLV );
        
    }
);