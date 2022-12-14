sap.ui.define(["sap/ui/integration/Designtime"
], function (Designtime) {
	"use strict";
	return function () {
		return new Designtime({
			"form": {
				"items": {
					"dateParameter": {
						"manifestpath": "/sap.card1/configuration/parameters/dateParameter/value",
						"type": "date"
					}
				}
			}
		});
	};

});
