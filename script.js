// TODO: improve
// - create color array 6 or 3 values
// - then random over array to pick correct
// - retrieve backgroundcolor of square and compare with correct color 

// VAR
let randRgb;
let numCube = 6;
let cubeArr = [];
let correctCol = '';  //correct rgb() str



// createColors(numCube);

// 1) Create x rgbs el in arr
function createColors(numCube) {
    for (let i = 0; i < numCube; i++) {
        let val = randVal();
        cubeArr.push(val);
    }

    let correctColVal = Math.floor(Math.random() * numCube) + 0;
    correctCol = cubeArr[correctColVal];
    titleRgb.textContent = correctCol;
    // console.log(cubeArr);
    // console.log(correctColVal);
    // console.log(correctCol);

    return cubeArr;
}


// EVENTS
// document.querySelector('#new').addEventListener('click', newColors);
document.querySelector('#new').addEventListener('click', fillCubes);
let titleRgb = document.querySelector('.rgb');
titleRgb.textContent = '';

let cubeNodes = document.querySelectorAll("[class^='cube']");
let cubeDOM = [...cubeNodes];  // nodelist to array
let header = document.querySelector('header');
let easy = document.querySelector('#easy').addEventListener('click', leveleasy);
let hard = document.querySelector('#hard').addEventListener('click', levelhard);


// NEW SOLUTION RGB PROVIDED BY ARRAY
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

        // console.log(cubeDOM[i]);
        // console.log(el);
        // console.log('cl');
    }
}


function checkAnswer() {
    if (this.style.backgroundColor === correctCol) {
        for (let i = 0; i < cubeDOM.length; i++) {
            cubeDOM[i].style.backgroundColor = correctCol;
            header.style.backgroundColor = correctCol;
        }
    } else if (this.style.backgroundColor !== correctCol) {
        alert('Wrong! Try again.');
    }
}



// OLD SOLUTION:
function newColors() {
    // randRgb = randVal();
    titleRgb.textContent = correctCol;
    cubeColor();
}


// REPLACED by createColors()
// function correctCube(numCube) {
//     return Math.floor(Math.random() * (numCube - 1)) + 0;
// }


function cubeColor() {
    let currArr = createColors(numCube);

    // 2) fill color in box
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

// function cubeSelectWrong() {
//     // todo
//     console.log('wrong');
//     this.classList.add("hide");
// }

// function cubeSelectCorrect() {
//     // code
//     console.log('correct');
//     for (let i = 0; i < cubeNodes.length; i++) {
//         const el = cubeNodes[i];
//         el.style.backgroundColor = `${randRgb}`;
//     }
//     header.style.backgroundColor = `${randRgb}`;
//     console.log(header);
// }


function leveleasy() {
    numCube = 3;
    // newColors()
    fillCubes();

}


function levelhard() {
    numCube = 6;
    // newColors()
    fillCubes();

}


function randVal() {
    let res;

    let r = Math.floor(Math.random() * 255) + 0;
    let g = Math.floor(Math.random() * 255) + 0;
    let b = Math.floor(Math.random() * 255) + 0;

    return res = `rgb(${r}, ${g}, ${b})`;
}




// Start initial game
fillCubes();