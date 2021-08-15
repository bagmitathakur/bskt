class Player{
    constructor(){   
    this.name=null;
    this.index=null;
    this.score=0;
    this.rank=null;
}
getCount(){
    database.ref("playerCount").on("value",(data)=>{
        playerCount=data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        score:this.score,
        index:this.index,
        rank:this.rank

    })}
    playerInfo(){
        var playerInfoRef=database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allplayers=data.val();
        })
    }
    getRank(){
        database.ref("playerRank").on("value",(data)=>{
            this.rank=data.val();
        })
    }
     static updateRank(rank){
        database.ref('/').update({
        Rank:rank
         
        })
    }

}