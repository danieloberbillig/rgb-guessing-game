
// VAR
let randRgb;
let numCube = 6;
let cubeArr = [];
let correctCol = '';  //correct rgb() str
let stdBg = 'rgb(55, 139, 218)';
// ---

// DOM ELM AND EVENT LISTENER
let newBtn = document.querySelector('#new');
newBtn.addEventListener('click', fillCubes);

let titleRgb = document.querySelector('.rgb');
titleRgb.textContent = '';

let cubeNodes = document.querySelectorAll("[class^='cube']");
let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let cubeDOM = [...cubeNodes];  // nodelist to array
let header = document.querySelector('header');
let easyElm = document.querySelector('#easy');
let easy = document.querySelector('#easy').addEventListener('click', leveleasy);
let hardElm = document.querySelector('#hard');
let hard = document.querySelector('#hard').addEventListener('click', levelhard);
// ---

// START GAME
init();

function init() {
    fillCubes();

}


function fillCubes() {
    // 1) create array with colors and select correct one
    createColors(numCube);

    // 2) assign rgbs from array to DOM
    for (let i = 0; i < cubeArr.length; i++) {
        const el = cubeArr[i];
        cubeDOM[i].style.backgroundColor = el;
        cubeDOM[i].textContent = el;
        
        // 3) add click evt listener 
        cubeDOM[i].addEventListener('click', checkAnswer);
    }
}

function createColors(numCube) {
    header.style.backgroundColor = stdBg;
    cubeArr = [];
    for (let i = 0; i < numCube; i++) {
        let val = randVal();
        cubeArr.push(val);
    }

    let correctColVal = Math.floor(Math.random() * numCube) + 1;
    correctCol = cubeArr[correctColVal];
    titleRgb.textContent = correctCol;

    return cubeArr;
}


function checkAnswer() {
    if (this.style.backgroundColor === correctCol) {
        for (let i = 0; i < cubeDOM.length; i++) {
            cubeDOM[i].style.backgroundColor = correctCol;
            header.style.backgroundColor = correctCol;
        }
    } else if (this.style.backgroundColor !== correctCol) {
        alert('Wrong! Try again.');
        newBtn.textContent = 'try again';
        this.style.backgroundColor = "#232323";
    }
}

function leveleasy() {
    numCube = 3;
    row2.style.display = 'none';
    fillCubes();
    easyElm.classList.add("active");
    hardElm.classList.remove("active");
}

function levelhard() {
    numCube = 6;
    row2.style.display = 'flex';
    fillCubes();
    hardElm.classList.add("active");
    easyElm.classList.remove("active");
}

function randVal() {
    let res;
// TODO: needs to be 256!!!
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return res = `rgb(${r}, ${g}, ${b})`;
}

/* Notes
 Math.floor(Math.random() * (max - min + 1)) + min;
 Math.floor(Math.random() * cubeArr.length);
*/