function setup() {
    createCanvas(640, 480);
}

function draw() {
//    if(mouseIsPressed) {
//        fill(0);
//    } else {
//        fill(255);
//    }
//    ellipse(mouseX, mouseY, 80, 80);
//    

    
    background('#FFFAED');
    
    var x = width/2;
    var y = height/2;
    
    noStroke();
    
    fill('#52C5DC');
    ellipse(x, y+30, 190, 200);
    
    
    fill('#008000');
    ellipse(x, y+40, 190, 200);
    
    
    //eyeLeft
    fill('#FFFFFF');
    ellipse(x+40, y+10, 64, 64);
    
    
    //eyeRight
    fill('#FFFFFF');
    ellipse(x-40, y+10, 64, 64);
    
    
    fill('#000000');
    rect(x+20, y+5, 40, 8);

    
    fill('#000000');
    rect(x-60, y+5, 40, 8);
    
    
    
//    //nose
//    fill('#EFB8D2');
//    ellipse(x, y+30, 64, 64);
//    
//    //eyeLeft
//    fill('#FFFFFF');
//    ellipse(x+42, y-26, 64, 64);
//    
//    //pupilLeft
//    fill('#7FC35E');
//    ellipse(x+42, y-26, 40, 40);
//    
//    //eyeRight
//    fill('#FFFFFF');
//    ellipse(x-42, y-26, 64, 64);
//    
//    //pupilRight
//    fill('#7FC35E');
//    ellipse(x-42, y-26, 40, 40);
//    
//    //earLeft
//    fill('#52C5DC');
//    push();
//    translate(x-100, y-80);
//    rotate(Math.PI/4);
//    ellipse(0,0, 52, 92);
//    pop();
//    
//    //earRight
//    fill('#52C5DC');
//    push();
//    translate(x+100, y-80);
//    rotate(-Math.PI/4);
//    ellipse(0, 0, 52, 92);
//    pop();
//    
//    //tongue
//    fill('#EE3E36');
//    arc(x-20, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
//    
    
    
    
}