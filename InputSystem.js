window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function InputSystem(){
    this.mouseX = 0;
    this.mouseY = 0;
    this.isKeyPressed = [];
    return this;
}

function onMouseMove(e){
    var theCanvas = document.getElementById("GameCanvas")
    inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
    inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
}

function onKeyDown(e){
    inputSystem.isKeyPressed[e.keyCode]=true;
}

function onKeyUp(e){
    inputSystem.isKeyPressed[e.keyCode]=false;
}

InputSystem.prototype.isKeyDown = function(keyCode){
    if(this.isKeyPressed[keyCode] == true)
        return true;
    else
        return false;
}


var inputSystem = new InputSystem();