

function preload(){
  imgdark=loadImage("C:\Users\isaac\Documents\website\logo\boole_light.png") 
  imglight=loadImage("C:\Users\isaac\Documents\website\logo\boole_dark.png")
   }
   

   function setup() {
     createCanvas(1920, 1080,0,0,0,0);

     
   }
   
   function draw() {
     background(0,0,0,0);
          image(imglight,0,0,400,200)
     image(imgdark,0,0,400,200)

   }