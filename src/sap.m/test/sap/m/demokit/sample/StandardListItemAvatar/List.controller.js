sap.ui.define(['sap/ui/core/mvc/Controller','sap/ui/model/json/JSONModel'],
	function(Controller, JSONModel) {
	"use strict";

	var ListController = Controller.extend("sap.m.sample.StandardListItemAvatar.List", {

		onInit : function (evt) {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
			this.getView().setModel(oModel);

			this.byId("ShortProductList").bindElement("/ProductCollection");
		}
	});


	return ListController;

});