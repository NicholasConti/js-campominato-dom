"use strict";

//------------------
//FUNCTIONS
//------------------
function myCreateEl(tagEl, classEl, numCell, level){
    const element = document.createElement(tagEl);  //creazioen div class= cell
    element.classList.add(classEl);
    element.classList.add(level);
    element.innerText = numCell;
    //CAMBIO COLORE
    element.addEventListener('click',
        function(){
            element.classList.add('colorbg');
            console.log(numCell);
        }
    )
    return element;
}

function appendElement(containerEl, sonEl){
    containerEl.append(sonEl);
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
        //riempimento board
        for(let i = 1; i <= numberOfCells; i++){
            const createdElement = myCreateEl('div', 'cell', i, classLV);
            appendElement(cellBoard, createdElement);
        }

    }
);