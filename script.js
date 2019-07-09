// TODO: improve
// - create color array 6 or 3 values
// - then random over array to pick correct
// - retrieve backgroundcolor of square and compare with correct color 

// VAR
let randRgb;
let numCube = 6;
// EVENTS
document.querySelector('#new').addEventListener('click', newColors);
let titleRgb = document.querySelector('.rgb');
let cubeNodes = document.querySelectorAll("[class^='cube']");
let header = document.querySelector('header');
let easy = document.querySelector('#easy').addEventListener('click', leveleasy);
let hard = document.querySelector('#hard').addEventListener('click', levelhard);

function newColors() {
    randRgb = randVal();
    titleRgb.textContent = randRgb;
    cubeColor();
}

function randVal() {
    let res;

    let r = Math.floor(Math.random() * 255) + 0;
    let g = Math.floor(Math.random() * 255) + 0;
    let b = Math.floor(Math.random() * 255) + 0;

    return res = `rgb(${r}, ${g}, ${b})`;
}

function correctCube(numCube) {
    return Math.floor(Math.random() * (numCube - 1)) + 0;
}


function cubeColor() {
    for (let i = 0; i < numCube; i++) {
        const el = cubeNodes[i];

        if (i === correctCube(numCube)) {
            el.addEventListener('click', cubeSelectCorrect);
            el.style.backgroundColor = `${randRgb}`;
            el.textContent = 'hint';
        } else {
            el.addEventListener('click', cubeSelectWrong);
            el.style.backgroundColor = `${randVal()}`;
        }

    }
}

function cubeSelectWrong() {
    // todo
    console.log('wrong');
    this.classList.add("hide");
}

function cubeSelectCorrect() {
    // code
    console.log('correct');
    for (let i = 0; i < cubeNodes.length; i++) {
        const el = cubeNodes[i];
        el.style.backgroundColor = `${randRgb}`;
    }
    header.style.backgroundColor = `${randRgb}`;
    console.log(header);
}


function leveleasy() {
    numCube = 3;
    newColors()
}


function levelhard() {
    numCube = 6;
    newColors()
}