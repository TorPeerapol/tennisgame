function Tennis(score1 , score2){

	var player1 = '';
	var player2 = '';


	if(score1 == 0){
		player1 = "Love"
	}else if(score1 == 15){
		player1 = "Fifteen";
	}else if(score1 == 30){
		player1 = "Thirty";
	}else if(score1 == 40){
		player1 = "Forty";
	}

	if(score2 == 0){
		player2 = "Love"
	}else if(score2 == 15){
		player2 = "Fifteen";
	}else if(score2 == 30){
		player2 = "Thirty";
	}else if(score2 == 40){
		player2 = "Forty";
	}
	
	return player1 + " - " + player2;
}

describe("Tennis()", function() {
  it('should "Love - Love" start game',function(){
  	expect(Tennis(0,0)).toEqual("Love - Love");
  });
  it('should "Fifteen - Love" start game',function(){
  	expect(Tennis(15,0)).toEqual("Fifteen - Love");
  });
});
