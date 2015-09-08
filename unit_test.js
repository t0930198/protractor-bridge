describe('test1', function() {
	it("should respond with hello world", function(done) {
		request("https://www.google.com.tw/", function(error, response, body) {
			done();
		}, 250); // timeout after 250 ms
	});
});