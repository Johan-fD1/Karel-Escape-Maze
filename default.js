// Write your code here
function start(){
    while(noBallsPresent()){
        if(frontIsClear()){
            move();
            lookLeft();
        }else{
            turnRight();
        }
    }
    takeBall();
    while(notFacingEast()){
        turnLeft();
    }
}
function lookLeft(){
    turnLeft();
    if(frontIsClear()){
        move();
    }
    turnRight();
}