
// VAR
let randRgb;
let numTiles = 6;
let level = 'medium';
let cubeArr = [];
let correctCol = '';  //correct rgb() str
let bgStandard = 'rgb(78, 78, 78)'; //primary color
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

    // testLog();
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

    let correctColVal = Math.floor(Math.random() * numCube);
    correctCol = cubeArr[correctColVal];
    titleRgb.textContent = correctCol;

    return cubeArr;
}

function createTile(colorRange) {

    // 1) for each value in color array, create a tile, style with rgb and append to DOM, add listener 
    colorRange.forEach(el => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.innerHTML = `<p><i class="skull fas fa-skull-crossbones"></i></p>`;
        // console.log(`numTiles: ${numTiles}`);

        switch (level) {
            case 'easy':
                tile.classList.add("oneRow");
                break;
            case 'medium':
                tile.classList.add("twoRow");
                break;
            case 'hard':
                tile.classList.add("threeRow");
                break;
            default:
                break;
        }

        tile.addEventListener('click', checkAnswer);
        tile.style.backgroundColor = el;
        tile.style.color = el;
        tileArea.appendChild(tile);
    });
}


function checkAnswer() {
    if (this.style.backgroundColor === correctCol) {
      
        playSoundCorrect(1);

        correctMsg();
        newBtn.textContent = 'restart';

    } else if (this.style.backgroundColor !== correctCol) {

        playSoundWrong(1);

        wrongMsg();
        newBtn.textContent = 'restart';
        this.style.backgroundColor = bgStandard;
        this.style.color = 'rgb(0,0,0)';
    }
}

let bomb = document.querySelector('.bomb');


// AUDIO
let soundWrong = new Audio("asset/sound/zapsplat_warfare_bomb_large_distant_explosion_31204.ogg");
let soundCorrect = new Audio("asset/sound/zapsplat_human_male_middle_aged_soft_tone_says_oh_yeah_22279.ogg");
soundWrong.preload = 'auto';
soundCorrect.preload = 'auto';
soundWrong.load();
soundCorrect.load();

function playSoundWrong(volume) {
    var click = soundWrong.cloneNode();
    click.volume = volume;
    click.play();
}

function playSoundCorrect(volume) {
    var click = soundCorrect.cloneNode();
    click.volume = volume;
    click.play();
}



function wrongMsg() {
    msg.style.visibility = 'visible';
    msg.textContent = 'Wrong';
    setTimeout(() => {
        msg.style.visibility = 'hidden';
    }, 700);

}

function correctMsg() {
    msg.style.visibility = 'visible';
    msg.textContent = 'Correct';
    setTimeout(() => {
        msg.style.visibility = 'hidden';
    }, 700);

}

function leveleasy() {
    numTiles = 3;
    level = 'easy';
    easyElm.classList.add("active");
    medElm.classList.remove("active");
    hardElm.classList.remove("active");
    init()
}

function levelmedium() {
    numTiles = 6;
    level = 'medium';
    hardElm.classList.remove("active");
    easyElm.classList.remove("active");
    medElm.classList.add("active");
    init()
}

function levelhard() {
    numTiles = 9;
    level = 'hard';
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
    console.log(`numTiles: ${numTiles}`);
    console.log(`cubeArr: ${cubeArr}`);
    console.log(`correctCol: ${correctCol}`);
}


// LOADING SPINNER / HIDE CONTENT WHEN LOADING ASSETS
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('hideContentWhileLoading').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('hideContentWhileLoading').style.visibility = "visible";
        }, 700);
    }
}


/* Notes
 Math.floor(Math.random() * (max - min + 1)) + min;
 Math.floor(Math.random() * cubeArr.length);
*/