window.addEventListener("load",onPageLoadComplete, false);
var temp_text_x = 400;
var temp_text_y = 300;


function onPageLoadComplete(){
    var FPS = 30;
    setInterval(gameLoop, 1000/FPS);
}

function Update(){
    if(inputSystem.isKeyDown(37)){
        temp_text_x-=12;
    }
    if(inputSystem.isKeyDown(39)){
        temp_text_x+=12;
    }
    if(inputSystem.isKeyDown(38)){
        temp_text_y-=12;
    }
    if(inputSystem.isKeyDown(40)){
        temp_text_y+=12;
    }
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
    
    Context.font = '40px Arial';
    Context.fillText("^", temp_text_x, temp_text_y);
}

function gameLoop(){
    Update();
    Render();
    console.log(frameCounter.frameCount);
    frameCounter.countFrame();
}