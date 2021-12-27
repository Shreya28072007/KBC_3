class Finalpage{
    constructor(){
this.check = createElement('h2');
this.total = createElement('h1');
    }

    display(){
  
        this.check.html("Hey! "+security.name+", correct answers given by you are: "+ correctAns+"/10");
        this.check.style('color','white');
        this.check.position(350,250);



        result = createSprite(900,440,20,20);
        if(correctAns>6){

            result.addImage(trophy_image);
            result.scale =0.4;
           

        }else{
            result.addImage(cryingGirl_img);
          
        }
  
    }
    
}