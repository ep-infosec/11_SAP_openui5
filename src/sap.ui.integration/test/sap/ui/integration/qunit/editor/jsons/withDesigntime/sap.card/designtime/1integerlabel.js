sap.ui.define(["sap/ui/integration/Designtime"
], function (Designtime) {
	"use strict";
	return function () {
		return new Designtime({
			"form": {
				"items": {
					"integerParameter": {
						"manifestpath": "/sap.card1/configuration/parameters/integerParameter/value",
						"type": "integer",
						"label": "integerParameterLabel"
					}
				}
			}
		});
	};
});
