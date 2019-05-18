let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

let x = 10,
    y = 5,
    tx = 5,
    ty = 0;

function drawRect() {
context.fillStyle = 'black';
context.fillRect(x, y, 50, 25);
}


let move = function() {
    x+= tx;
    y+= ty;
    if (x >= 250) {
        x -= 10;
        tx = 0;
        ty = 5;
    }

    if (x < 10) {
        x = 10;
        tx = 0;
        ty = -5;
    }

    if (y > 120) {
        y -= 5;
        tx = -5;
        ty = 0;
    }

    if (y < 5) {
        y = 5;
        tx = 5;
        ty = 0;
    }
    console.log(x,y);
};

function draw() {
    context.clearRect(0,0, canvas.width, canvas.height);
    drawRect(x,y);
    move();

    requestAnimationFrame(draw);
}

draw();