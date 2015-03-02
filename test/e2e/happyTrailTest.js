'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe("to e2e test the 'Editable dropdown' tab", function() {
	var ptor;

	beforeEach(function() {
	  browser.driver.manage().window().maximize();
	  browser.get('webapp');
	});

	afterEach(function() {
		//element(by.id('signOut')).click();
	});

	it('should redirect to example1 tab', function() {
		browser.getLocationAbsUrl().then(function(url) {
	        expect(url.split('#')[1]).toBe('/example1');
		});
	});
	it("by default all users are displayed in example2 tab", function() {
		element.all(by.css('ul.subnav-tabs li')).get(1).click();
		browser.getLocationAbsUrl().then(function(url) {
	        expect(element.all(by.css('div#users span')).count()).toBe(7);
	        expect(element(by.id("searchStatus")).getAttribute('class')).toMatch("notFound");
		});
	});

	it("when searching 'l', only Paul and Alex show up", function() {
		element.all(by.css('ul.subnav-tabs li')).get(1).click();
		browser.getLocationAbsUrl().then(function(url) {
	        element(by.model('search.username')).sendKeys("l");
	        expect(element.all(by.css('div#users span')).count()).toBe(2);
	        expect(element(by.id("searchStatus")).getAttribute('class')).toMatch("notFound");
		});
	});

	it("when searching 'l', only Paul and Alex show up", function() {
		element.all(by.css('ul.subnav-tabs li')).get(1).click();
		browser.getLocationAbsUrl().then(function(url) {
	        element(by.model('search.username')).sendKeys("Paul");
	        expect(element.all(by.css('div#users span')).count()).toBe(1);
	        expect(element(by.id("searchStatus")).getAttribute('class')).toMatch("found");
	        expect(element.all(by.css('div#users span')).count()).toBe(1);
		});
	});

	it("clicking re init button will reset the search string", function() {
		element.all(by.css('ul.subnav-tabs li')).get(1).click();
		browser.getLocationAbsUrl().then(function(url) {
	        element(by.model('search.username')).sendKeys("Paul");
	        expect(element.all(by.css('div#users span')).count()).toBe(1);
	        expect(element(by.id("searchStatus")).getAttribute('class')).toMatch("found");
	        element(by.id('resetButton')).click();
	        expect(element(by.model('search.username')).getText()).toBe('');
	        expect(element.all(by.css('div#users span')).count()).toBe(7);

		});
	});

});
