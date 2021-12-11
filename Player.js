class Player{
  constructor(){
     this.nome = null;
     this.index = null;
     this.distance = 0;
  }
  getCount(){
    var refPlayerNum = database.ref("playerNum")
    refPlayerNum.on("value", function(data){
      playerNum = data.val()
    })
  }
  updateCount(N){
    database.ref("/").update({
      playerNum: N
    })
    
  }
  update(){
    var playerIndex = "player"+ playerNum
    database.ref(playerIndex).set({
      name: this.nome,
      distance = this.distance
    })

  }
  static getAllplayers(){
    var refAll = database.ref("Players")
    refAll.on("value", function(data){
      playerAll = data.val()
    })

  }



}

