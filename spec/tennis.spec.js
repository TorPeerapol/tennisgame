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
});
