
// VAR
let randRgb;
let numTiles = 6;
let cubeArr = [];
let correctCol = '';  //correct rgb() str
// let stdBg = '';
// let stdBg = 'rgb(55, 139, 218)';
// ---

// DOM ELM AND EVENT LISTENER
let newBtn = document.querySelector('#new');
newBtn.addEventListener('click', init);

let msg = document.querySelector('#message');

let titleRgb = document.querySelector('.rgb');
titleRgb.textContent = '';

let tileArea = document.querySelector('.tile-area');


let cubeNodes = document.querySelectorAll("[class^='cube']");
let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let cubeDOM = [...cubeNodes];  // nodelist to array
let header = document.querySelector('header');
let easyElm = document.querySelector('#easy');
let easy = document.querySelector('#easy').addEventListener('click', leveleasy);
let medElm = document.querySelector('#medium');
let med = document.querySelector('#medium').addEventListener('click', levelmedium);
let hardElm = document.querySelector('#hard');
let hard = document.querySelector('#hard').addEventListener('click', levelhard);
// ---



// START GAME
init();

function init() {
    reset();
    let colorRange = createColors(numTiles);
    createTile(colorRange)

    testLog();
}

function reset() {
    
    // clear result message
    msg.textContent = '';
     
    // clear tiles
     let tileToRemove = tileArea.lastElementChild;
     while (tileToRemove) {
         tileArea.removeChild(tileToRemove);
         tileToRemove = tileArea.lastElementChild;
     }
}

function createColors(numCube) {
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

function createTile(colorRange) {

   


    // 1) for each value in color array, create a tile, style with rgb and append to DOM, add listener 
    colorRange.forEach(el => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.addEventListener('click', checkAnswer);
        tile.style.backgroundColor = el;
        tileArea.appendChild(tile);
    });
}


function checkAnswer() {
    if (this.style.backgroundColor === correctCol) {
            msg.textContent = 'correct';
    } else if (this.style.backgroundColor !== correctCol) {
        msg.textContent = 'Wrong. Try again.'
        newBtn.textContent = 'restart';
        this.style.backgroundColor = "#232323";
    }
}

function leveleasy() {
    numTiles = 3;
    easyElm.classList.add("active");
    medElm.classList.remove("active");
    hardElm.classList.remove("active");
    init()
}

function levelmedium() {
    numTiles = 6;
    hardElm.classList.remove("active");
    easyElm.classList.remove("active");
    medElm.classList.add("active");
    init()
}

function levelhard() {
    numTiles = 9;
    hardElm.classList.add("active");
    easyElm.classList.remove("active");
    medElm.classList.remove("active");
    init()
}



function randVal() {
    let res;
    // TODO: needs to be 256!!!
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return res = `rgb(${r}, ${g}, ${b})`;
}


function testLog() {
    console.log(`numCube: ${numTiles}`);
    console.log(`cubeArr: ${cubeArr}`);
    console.log(`correctCol: ${correctCol}`);
}


/* Notes
 Math.floor(Math.random() * (max - min + 1)) + min;
 Math.floor(Math.random() * cubeArr.length);
*/