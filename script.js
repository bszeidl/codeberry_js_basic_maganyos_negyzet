function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let size = 100;
    let padding = 10;
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    context.fillStyle = 'green';
    context.fillRect(canvasWidth - size -padding,canvasHeight - size -padding,size,size);  

}

window.addEventListener("load", pageLoaded);