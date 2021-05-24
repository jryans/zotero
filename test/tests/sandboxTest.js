"use strict";

describe("Zotero.Sandbox", function() {
	it("should return a valid object", function() {
		const Example = Zotero.sandboxTest();
		assert.isOk(Example);
		const ex = new Example();
		assert.isOk(ex);
		assert.isOk(ex.parseAsync);
		assert.doesNotThrow(() => ex.parseAsync());
	});
});
