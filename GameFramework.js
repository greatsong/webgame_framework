window.addEventListener("load",onPageLoadComplete, false);

function onPageLoadComplete(){
    var FPS = 30;
    setInterval(gameLoop, 1000/FPS);
}

function Update(){
}

function Render(){
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    Context.fillStyle = "#000";
    Context.fillRect(0,0,800,600);
    
    Context.fillStyle = "#fff";
    Context.font = '15px Arial';
    Context.textBaseline="top";
    Context.fillText("fps : "+frameCounter.Lastfps, 10, 10);
}

function gameLoop(){
    Update();
    Render();
    console.log(frameCounter.frameCount);
    frameCounter.countFrame();
}