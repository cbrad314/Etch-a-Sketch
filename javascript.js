const body = document.querySelector('body');
let button = document.querySelector('button');
 let boxSelection =  16;
// let promptAnswer = 

button.addEventListener('click', getBoxSelection);
drawScreen();
function getBoxSelection (){
    boxSelection = parseInt(prompt('Enter the desired number of boxes per row/column (up to 100)',boxSelection));
    drawScreen();
};

function drawScreen () {
    if (boxSelection>100||boxSelection<1){
        alert('Please select a number between 1 and 100')
    }
    else {
        
        let allContainers = document.querySelectorAll('.container');
        allContainers.forEach(container => {
            let allTiles = container.querySelectorAll('.tile');
            allTiles.forEach(tile => container.removeChild(tile));
            body.removeChild(container);})
        dynamicWidth = (100/boxSelection)-1;
        for (i=1;i<=boxSelection;i++){    
            const container = document.createElement('div');
            container.classList.add('container');
            body.appendChild(container);
            for (j=1;j<=boxSelection;j++){
                const tile = document.createElement('div');
                tile.classList.add('tile');
                // tile.textContent = j;
                tile.addEventListener('mouseover',function (e) {e.target.classList.add('hover')});
                tile.setAttribute('style', `width:${dynamicWidth}%`);
                container.appendChild(tile);
            }
        }
    }
}
// tiles = document.querySelectorAll('.tile');
// tiles.forEach(tile => {tile.addEventListener('hover',)
    
// });
// console.log(tiles);

// for (i=1;i<=16;i++){    
//     const tile = document.createElement('div');
//     tile.classList.add('tile');
    
//     tile.textContent = i;
//     body.appendChild(tile);
// }