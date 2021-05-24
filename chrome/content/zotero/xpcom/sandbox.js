/*
    ***** BEGIN LICENSE BLOCK *****

    Copyright © 2021 Corporation for Digital Scholarship
                     Vienna, Virginia, USA
                     https://digitalscholar.org

    This file is part of Zotero.

    Zotero is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Zotero is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with Zotero.  If not, see <http://www.gnu.org/licenses/>.

    ***** END LICENSE BLOCK *****
*/

"use strict";

Zotero.sandboxTest = function() {
	const hiddenWindow = Cc["@mozilla.org/appshell/appShellService;1"]
		.getService(Ci.nsIAppShellService).hiddenDOMWindow;
	const sandbox = new Cu.Sandbox(hiddenWindow, {
		sandboxPrototype: hiddenWindow,
		sandboxName: "Sandbox Test",
	});
	sandbox.Zotero = {
		debug: Components.utils.exportFunction(Zotero.debug, sandbox),
	};

	Services.scriptloader.loadSubScriptWithOptions(
		"resource://zotero/sandbox-content.js",
		{
			target: sandbox,
			ignoreCache: true,
		},
	);
	
	return sandbox.Example;
};
