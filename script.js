 const body = document.querySelector('body');
let button = document.querySelector('button');
let container = document.querySelector('.container');
let input = document.querySelector('input');
let boxSelection = parseInt(input.value);
let priorBoxSelection;
let windowWidth;
let windowHeight;
window.addEventListener('load',drawScreen);
input.addEventListener('change', getBoxSelection);
// window.addEventListener('load',sizeContainer);
// window.addEventListener('change',sizeContainer);




function getBoxSelection (){
    boxSelection = parseInt(input.value);
    if ((boxSelection<=100&&boxSelection>=1)&&(boxSelection!=priorBoxSelection))
        return drawScreen();
        else div = document.createElement('div');
            div.textContent = 'Please enter a number between 1 and 100';
            container.appendChild('div');
    };

// function sizeContainer(){
//     windowHeight = window.innerHeight;
//     windowWidth = window.innerWidth;
//     container.setAttribute('style',`width:${windowWidth}px`)
//     container.setAttribute('style',`height:${windowHeight-40}px`)
// }

function drawScreen(){
    cleanScreen();
    //draw column(s) equal to boxSelection
    for (let i = 1; i <= boxSelection; i++) {
        const div = document.createElement('div');
        // div.textContent = '*';
        div.classList.add('row');
        windowHeight = window.innerHeight -85;
        windowWidth = window.innerWidth;
        const min = Math.min(windowHeight,windowWidth)
        container.setAttribute('style',`height:${min}px; width:${min}px`);
        container.appendChild(div);
        const divRelativeHeight = 100/boxSelection;
        div.setAttribute('style',`height:${divRelativeHeight}%`)
        
        //draw row(s) in each column equal to boxSelection
        for (let index = 1; index <= boxSelection; index++) {
            const tile = document.createElement('div');
            // tile.textContent = index;
            tile.classList.add('tile');
             tile.setAttribute('style',`width:${divRelativeHeight}%`)
            tile.addEventListener('mouseover',(e) => e.target.classList.add('color'))
            div.appendChild(tile);
            
            };
    };
};

function cleanScreen(){
    let allRows = document.querySelectorAll('.row');
    allRows.forEach(row => {
        let allTiles = row.querySelectorAll('.tile');
        allTiles.forEach(tile => row.removeChild(tile));
        container.removeChild(row);})
};
