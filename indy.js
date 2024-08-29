// Select my element
let player = document.getElementById('player')

// Initial position of my player
let posX = 0;
let posY = 0;

// Distance we are going to move the player
let step = 50;

const updatePosition = () => {
    player.style.top = posY+'px';
    player.style.left = posX+'px';
}

document.addEventListener('keydown', (target) => {

    if( target.key == 'ArrowDown'){
        posY = posY + step; // posY += step
        if(posY > window.innerHeight-player.offsetHeight){
            posY = window.innerHeight - player.offsetHeight;
        }
    } else if( target.key == 'ArrowRight'){
        posX += step
        if(posX > window.innerWidth-player.offsetWidth){
            posX = window.innerWidth - player.offsetWidth;
        }
    } else if(target.key == 'ArrowUp'){
        posY -= step;
        if(posY < 0){
            posY = 0
        }
    } else if(target.key == 'ArrowLeft'){
        posX -=step
        if(posX<0){
            posX = 0
        }
    }

    updatePosition();
})