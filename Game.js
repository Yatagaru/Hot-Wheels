class Game{
  constructor(){
   
  }
  getState(){
  var state = database.ref("gameState")
  state.on("value", function(data){
    gameState = data.val()
   })

  }
  update(state){
  database.ref("/").update({
   gameState: state
   }) 
  }
  start(){
  if(gameState===0){
    form = new Form();
    form.display();
    player = new Player();
    player.getCount();
   
  }
  }
  play(){
    form.hide();
    textSize(30)
    text("O jogo iniciou!")
    Player.getAllplayers()
    if(playerAll!==undefined){
      var textY = 130;
      for(let I in playerAll){
        textY += 20;
        textSize(15);
        text(playerAll[I].name+": "+ playerAll[I].distance,120,textY)
      }
    }
    if(keyDown(UP_ARROW)&& player.index!==null){
      player.distance += 50
      player.update()

    }
  }

}