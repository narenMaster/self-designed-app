class Form {

    constructor(){
       // this.title = createElement('h1');
        //this.button = createButton('START');
        this.gender = createInput("");
        this.input = createInput("");
         this.age = createInput("");
         this.contact = createInput("");
         this.signInButton = createButton("SIGN IN");
    }

    hide(){
       //this.title.hide();
        //t//his.button.hide();
        this.inputLb.hide();
        this.genderLb.hide();
        this.ageLb.hide();
        this.contactLb.hide();
     this.signInButton.hide();
    
    }

    display(){
       
        fill("white");
        stroke("black");
        rect(displayWidth/4,displayHeight/2-150,displayWidth/4+350,displayHeight/2*1)

        /*this.title.html("xxx");
        this.title.position(displayWidth/2-65 , displayHeight/4/0.5);
        this.button.position(displayWidth/2+250 , displayHeight/2+230);*/


            this.inputLb = createElement("h5");
            this.inputLb.html("USER : ");
            this.inputLb.position(displayWidth/2-375 , displayHeight/2-120);
            
            this.input.position(displayWidth/2-320 , displayHeight/2-100);

            
            this.signInButton.position(displayWidth/2+235 , displayHeight/2+250);

            this.genderLb = createElement("h5");
            this.genderLb.html("GENDER : ");
            this.genderLb.position(displayWidth/2-375 , displayHeight/2-40);
            
            this.gender.position(displayWidth/2-300 , displayHeight/2-20);

            this.ageLb = createElement("h5");
            this.ageLb.html("AGE : ");
            this.ageLb.position(displayWidth/2-375 , displayHeight/2+70);
           
            this.age.position(displayWidth/2-330 , displayHeight/2+90);

            this.ctcLb = createElement("h5");
            this.ctcLb.html("CONTACT : ");
            this.ctcLb.position(displayWidth/2-375 , displayHeight/2+180);
           
            this.contact.position(displayWidth/2-300 , displayHeight/2+200);


      //  });

        this.signInButton.mousePressed(()=>{
           /* this.inputLb.hide();
            this.genderLb.hide();
            this.ageLb.hide();
            this.contactLb.hide();
             this.signInButton.hide();*/
            user.name = this.input.value();
            userCount += 1 ;
            user.index = user.count ;
            user.update();
            user.updateUserCount(userCount);

            database.ref("user").set({
                name : this.name
        });
        });
    }
}

