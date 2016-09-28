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
		}

		if(scoreB === 0){
			echoScoreB = 'Love';
		}else if(scoreB === 1){
			echoScoreB = 'Fifteen';
		}else if(scoreB === 2){
			echoScoreB = 'Thirty';
		}else if(scoreB === 3){
			echoScoreB = 'Forty';
		}

		if(scoreA < 4 && scoreB < 4){			
			return echoScoreA + " - " + echoScoreB;
		}
		else if(scoreA === 4){
			this.newGame();
			return "Player A won";
		}else if(scoreB === 4){
			this.newGame();
			return "Player B won";
		}
			
	}
}

describe("Tennis()", function() {

	var test = new Tennis();
	test.newGame();

    it('should "Love - Love" start game',function(){
  		expect(test.echo()).toEqual("Love - Love");
    });

	it('should "Fifteen - Love"',function(){
		test.plaryerAGetScore();
		expect(test.echo()).toEqual("Fifteen - Love");
	});
	it('should "Thirty - Love"',function(){
		test.plaryerAGetScore();
		expect(test.echo()).toEqual("Thirty - Love");
	});
	it('should "Forty - Love"',function(){
		test.plaryerAGetScore();
		expect(test.echo()).toEqual("Forty - Love");
	});
	it('should "Player A won"',function(){
		test.plaryerAGetScore();
		expect(test.echo()).toEqual("Player A won");
	});


	it('should "Love - Fifteen"',function(){
		test.plaryerBGetScore();
		expect(test.echo()).toEqual("Love - Fifteen");
	});
	it('should "Love - Thirty"',function(){
		test.plaryerBGetScore();
  		expect(test.echo()).toEqual("Love - Thirty");
    });
	it('should "Love - Forty"',function(){
		test.plaryerBGetScore();
  		expect(test.echo()).toEqual("Love - Forty");
    });
	it('should "Player B won"',function(){
		test.plaryerBGetScore();
  		expect(test.echo()).toEqual("Player B won");
 	});

	it('should "Fifteen - Fifteen"',function(){
		test.plaryerAGetScore();
		test.plaryerBGetScore();
		expect(test.echo()).toEqual("Fifteen - Fifteen");
	});
	it('should "Fifteen - Thirty"',function(){
		test.plaryerBGetScore();
		expect(test.echo()).toEqual("Fifteen - Thirty");
	});
	it('should "Fifteen - Forty"',function(){
		test.plaryerBGetScore();
		expect(test.echo()).toEqual("Fifteen - Forty");
	});

	

});
