function preload(){
    imgdark =loadImage("C:\Users\isaac\Documents\website\boole_dark.png")
    imglight =loadImage("C:\Users\isaac\Documents\website\boole_light.png")
   }
   
   let wh=windowHeight
let ww=windowWidth

   function setup() {
     createCanvas(windowWidth, windowHeight);
   }
   
   function draw() {
     background(220);
     Image(imgdark,ww-ww,wh-wh)
     Image(imglight,)
   }