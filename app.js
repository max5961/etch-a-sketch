let click = false;

//not in use right now
function draw(color){
    let square = document.querySelectorAll('.square');
    square.forEach(sq => {
        sq.addEventListener('click', () => {
            click = !click;
        });
    })
}

function drawBoard(dim){
    for(let i = 0; i<(dim**2); i++){
        let content = document.querySelector('.content');
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.style.height = `${100/dim}%`;
        square.style.width = `${100/dim}%`;
        content.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseover', () => {
            if(click){
                square.style.backgroundColor = 'black';
            }  
        })
    }
}

drawBoard(20);

function chooseColor(color){
    let square = document.querySelectorAll('.square');
    square.forEach(sq => {
        sq.addEventListener('mouseover', () => {
            if(click){
                sq.style.backgroundColor = `${color}`;
            }
        });
    })
}

function chooseRandomColor(){
    let square = document.querySelectorAll('.square');
    square.forEach(sq => {
        sq.addEventListener('mouseover', () => {
            if(click){
                sq.style.backgroundColor = `rgb(${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)})`;
            }
            
        });
    })
}

function chooseSimpleRandom(){
    let colors = ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'pink', 'brown']
    let square = document.querySelectorAll('.square');
    square.forEach(sq => {
        sq.addEventListener('mouseover', () => {
            if(click){
                sq.style.backgroundColor = `${colors[Math.floor(Math.random()*(colors.length -1))]}`
            }
        })
    })
}

function displayErrorMessage(){
    document.getElementById('errorMessage').style.display = 'flex';
    document.getElementById('dimInput').value = ''
}

function eraseErrorMessage(){
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('dimInput').value = '';
}

function updateSquaresText(dim){
    document.getElementById('squareSize').textContent = `Squares: ${dim}x${dim}`;
}

function getBoardSize(dim){
    if(dim == ""){
        eraseErrorMessage();
    } else if(dim >= 100 || dim <=10 || isNaN(dim)){
        displayErrorMessage(dim);
    } else {
        eraseErrorMessage();
        updateSquaresText(dim)

        let content = document.querySelector('.content');

        while(content.firstChild){
            content.removeChild(content.firstChild);
        }

        drawBoard(dim)
    }
}

function getDimensions(){
    dim = document.getElementById('dimInput').value;
    getBoardSize(dim);
}

function cleanBoard(){
    let dim = document.getElementById('squareSize').textContent.slice(9,11);
    document.getElementById('squareSize').textContent = `Squares: ${dim}x${dim}`;
    let content = document.querySelector('.content');

    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    drawBoard(dim);
}

document.querySelector('.content').addEventListener('click', () => {
    click = !click;
})
