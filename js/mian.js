"use strict";

//------------------
//FUNCTIONS
//------------------
// ELEMENT CREATION
function myCreateEl(tagEl, classEl, numCell, level, arrayBombs){
    const element = document.createElement(tagEl);  //creazione div class= cell
    element.classList.add(classEl);
    element.classList.add(level);
    element.innerText = numCell;
    //CONTROLLO BOMBE
    element.addEventListener('click',
        function(){
             bombCheck(arrayBombs, numCell, element);
        }
    )
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
function bombCheck(arrayBombe, numCell, element){
    if (arrayBombe.includes(numCell)){
        element.classList.add('colorbgbomb');
    } else{
        element.classList.add('colorbgright');
    }
}
//------------------
//MAIN
//------------------
const cellBoard = document.querySelector('.board');

const button = document.getElementById("start");

const select = document.getElementById("levels");

//creazione tabella
button.addEventListener('click',
    function(){
        // variabili per cambiare numero caselle e assegnare classe con dimsensioni diverse
        let classLV;
        let numberOfCells;
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
        cellBoard.innerHTML = ''; // reset board
        // ARRAY BOMBS
        let bombe = [];
        bombe = generaBombe(bombe, numberOfCells);
        console.log(bombe);
        //riempimento board
        for(let i = 1; i <= numberOfCells; i++){
            const createdElement = myCreateEl('div', 'cell', i, classLV, bombe);
            appendElement(cellBoard, createdElement);
        }
    }
);