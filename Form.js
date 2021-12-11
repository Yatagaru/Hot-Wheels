class Form{
  constructor(){
    this.input = createInput("nome");
    this.title = createElement("h2", "Hot Wheels");
    this.button = createButton("Jogar");
    this.Greetings = createElement("h1")
  }
  display(){
    this.title.position(350,100);
    this.input.position(327,200);
    this.button.position(400,250);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.nome = this.input.value();
      player.update(this.nome); 
      playerNum+= 1; 
      player.updateCount(playerNum);

      this.Greetings.html("Olá "+ this.nome)
      this.Greetings.position(350,270)

    });


  }
  hide(){
  this.input.hide();
  this.button.hide();
  this.title.hide();
  this.Greetings.hide();

  }






}
