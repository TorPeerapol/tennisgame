function Tennis(){
	var scoreA;
	var scoreB;

	var echoScoreA;
	var echoScoreB;
	
	this.newGame = function(){
		scoreA = 0;
		scoreB = 0;
	}

	this.plaryerAGetScore = function(){
		scoreA++;
	}

	this.plaryerBGetScore = function(){
		scoreB++;
	}

	this.echo = function(){
		if(scoreA === 0){
			echoScoreA = 'Love';
		}else if(scoreA === 1){
			echoScoreA = 'Fifteen';
		}else if(scoreA === 2){
			echoScoreA = 'Thirty';
		}else if(scoreA === 3){
			echoScoreA = 'Forty';
		}else if(scoreA === 4){
			scoreA = 0;
			scoreB = 0;
			return "Player A won";
		}else if(scoreB === 0){
			echoScoreB = 'Love';
		}else if(scoreB === 1){
			echoScoreB = 'Fifteen';
		}else if(scoreB === 2){
			echoScoreB = 'Thirty';
		}else if(scoreB === 3){
			echoScoreB = 'Forty';
		}else if(scoreB === 4){
			scoreA = 0;
			scoreB = 0;
			return "Player B won";
		}

		return echoScoreA + " - " + echoScoreB;
	}
}

describe("Tennis()", function() {
	var test = new Tennis();
    it('should "Love - Love" start game',function(){
  		expect(test.echo()).toEqual("Love - Love");
    });
	it('should "Fifteen - Love" start game',function(){
		expect(test.echo()).toEqual("Fifteen - Love");
	});
	it('should "Thirty - Love" start game',function(){
		expect(test.echo()).toEqual("Thirty - Love");
	});
	it('should "Forty - Love" start game',function(){
		expect(test.echo()).toEqual("Forty - Love");
	});
	it('should "Player A won" start game',function(){
		expect(test.echo()).toEqual("Player A won");
	});


	it('should "Love - Fifty" start game',function(){
		expect(test.echo()).toEqual("Love - Fifty");
	});
	it('should "Love - Thirty" start game',function(){
  		expect(test.echo()).toEqual("Love - Thirty");
    });
	it('should "Love - Forty" start game',function(){
  		expect(test.echo()).toEqual("Love - Forty");
    });
	it('should "Player B won" start game',function(){
  		expect(test.echo()).toEqual("Player B won");
 	});
	it('should "Fifty - Fifty" start game',function(){
		expect(test.echo()).toEqual("Fifty - Fifty");
	});
	it('should "Thirty - Fifty" start game',function(){
		expect(test.echo()).toEqual("Love - Thirty");
	});


});
