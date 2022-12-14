/*global describe,it,element,by,takeScreenshot,browser,expect*/

describe("sap.uxap.ObjectPageActions", function() {
	"use strict";

	browser.testrunner.currentSuite.meta.controlName = 'sap.uxap.ObjectPageLayout';

	it("Should load test page",function(){
		expect(takeScreenshot(element(by.id("__xmlview0--headerForTest-actions")))).toLookAs("initial");
	});

	it("Should open actions menu", function() {
		element(by.id("__xmlview0--headerForTest-overflow")).click();

		expect(takeScreenshot(element(by.id("__popover2")))).toLookAs("actionsmenu");
	});
});
