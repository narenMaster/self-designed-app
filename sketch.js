var form,database,user,backgroundImg,medicImg,ambulanceImg ;

function preload(){
backgroundImg = loadImage("images/background3.png");
medicImg = loadImage("images/medic.png");
ambulanceImg = loadImage("images/ambulance.jpg");
}

function setup() {
  createCanvas(displayWidth , displayHeight);
  //createSprite(400, 200, 50, 50);
  database =  firebase.database();
  
}
function draw() {
  background(backgroundImg); 
  //drawSprites();
  createForm();
}

async function createForm(){

  var user = new User();
  var usercountRef = await database.ref("userCount").once("value");
  if(usercountRef.exists()){
        userCount = usercountRef.val();
        user.getUserCount();
  }
  form  = new Form();
  form.display();
  
}