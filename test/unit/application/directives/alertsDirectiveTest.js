'use strict';

describe(
		'Unit testing alerts directive',
		function() {
			var $compile, $rootScope, $scope, parentScope, element;
			var i18nProperties = [ {
				'no.user.found' : 'No user found'
			}, {
				'users.found' : 'Some users have been found'
			}, {
				'tryAgain' : 'try again'
			} ];

			// beforeEach(module('directiveTemplateFilesModule')); or specifically if "moduleName: 'directiveTemplateFilesModule'" is not set in karma.conf.js
			beforeEach(module('templates/directives/alerts.html')); // only works if ng-html2js preprocessor of the related plugin is declared in karma conf and /webapp has been stripped in karma.conf.js

			// Load the myApp module, which contains the directive
			beforeEach(module('alertsDirective', function($provide) {
				var mockTranslateFilter = function(targetKey) {
					for ( var i in i18nProperties) {
						var entry = i18nProperties[i];
						var entrykeys = Object.keys(entry);
						for ( var j in entrykeys) {
							var key = entrykeys[j];
							if (key === targetKey) {
								return entry[key];
							}
						}
					}
					return undefined;
				};
				$provide.value('translateFilter', mockTranslateFilter);
			}));
			

			// Store references to $rootScope and $compile so they are available to all tests in this describe block
			beforeEach(inject(function(_$compile_, _$rootScope_) {
				// The injector unwraps the underscores (_) from around the parameter names when matching
				$compile = _$compile_;
				$rootScope = _$rootScope_;
				parentScope = $rootScope.$new();
				
				var directiveScope = parentScope.$new();
				element = angular.element("<alerts-box alerts=\"alerts\">");
				/*var element = */$compile(element)(directiveScope);
				
				expect(element.scope()).toBe(directiveScope);
			}));

			beforeEach(function() {
				this.addMatchers({
					toHaveClass : function(className) {
						return this.actual.hasClass(className);
					}
				});
			});

			it('Alert box is initialized with 1 success alert', function() {

				parentScope.alerts = [{successful:true, message:'users.found'}];
				expect(element.scope().alerts.length).toBe(1);
				$rootScope.$digest();
				
				expect(element.find('div.alert.alert-danger').length).toBe(0);
				var alertBlocks = element.find('div.alert.alert-success');
				expect(alertBlocks.length).toBe(1);
				expect(alertBlocks.eq(0).find('span').text()).toBe('Some users have been found');

			});

			it('Alert box is initialized with 2 unsuccessful alerts', function() {

				parentScope.alerts = [{successful:false, message:'no.user.found'},{successful:false, message:'tryAgain'}];
				expect(element.scope().alerts.length).toBe(2);
				$rootScope.$digest();

				expect(element.find('div.alert.alert-success').length).toBe(0);
				var alertBlocks = element.find('div.alert.alert-danger');
				expect(alertBlocks.length).toBe(2);
				expect(alertBlocks.eq(0).find('span').text()).toBe('No user found');
				expect(alertBlocks.eq(1).find('span').text()).toBe('try again');

			});

			it('When clicking on close buttons, alert boxes disappear', function() {

				parentScope.alerts = [{successful:false, message:'no.user.found'},{successful:false, message:'tryAgain'}];
				expect(element.scope().alerts.length).toBe(2);
				$rootScope.$digest();
				
				var closeButton = element.find('div.alert.alert-danger:eq(0) button');
				closeButton.click();

				var alertBlocks = element.find('div.alert.alert-danger');
				expect(alertBlocks.length).toBe(1);
				expect(alertBlocks.eq(0).find('span').text()).toBe('try again');

				var closeButton = element.find('div.alert.alert-danger:eq(0) button');
				closeButton.click();
				var alertBlocks = element.find('div.alert.alert-danger');
				expect(alertBlocks.length).toBe(0);

			});

		});