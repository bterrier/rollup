System.register(['./chunks/chunk.js'], function (exports, module) {
	'use strict';
	return {
		setters: [function (module) {
			exports('sharedValue', module.s);
		}],
		execute: function () {



		}
	};
});
