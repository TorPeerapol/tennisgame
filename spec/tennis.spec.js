function Tennis(){
	  this.echo = function(){
			  return "Love - Love";
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
});
