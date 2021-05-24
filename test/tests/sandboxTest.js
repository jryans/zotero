"use strict";

describe("Zotero.Sandbox", function() {
	it("should return a valid object", function() {
		const SingleFileClass = Zotero.sandboxTest();
		assert.isOk(SingleFileClass);
		const ex = new SingleFileClass();
		assert.isOk(ex);
		assert.isOk(ex.cancel);
		assert.doesNotThrow(() => ex.cancel());
	});
});
