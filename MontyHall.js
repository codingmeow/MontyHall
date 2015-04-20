var montyHallGame = function (numPlay){
  var result = 0, door = function(){
    return Math.floor(Math.random()*3);
  };
  for (var i=0; i<numPlay;i++){
    var pick = door(), win = door();
    if (pick === win){
      result +=1;
    }
  }
  var percent = Math.round(result/numPlay*100);

  console.log("Stay wins " + percent + "% of the time.");
  console.log("Switch wins " + (100-percent) + "% of the time.");
};
montyHallGame(1000);
