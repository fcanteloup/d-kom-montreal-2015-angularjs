angular.module('TranslationServiceModule',
		[ 'pascalprecht.translate'])
.config(['$translateProvider', function($translateProvider){

	$translateProvider.useStaticFilesLoader({
		  prefix: './ressources/languages/',
		  suffix: '.json'
		});


  // Adding a translation table for the English language
  /*$translateProvider.translations('en_US', {
    "TITLE"     : "How to use",
    "HEADER"    : "You can translate texts by using a filter.",
    "SUBHEADER" : "And if you don't like filters, you can use a directive.",
    "HTML_KEYS" : "If you don't like an empty elements, you can write a key for the translation as an inner HTML of the directive.",
    "DATA_TO_FILTER"    : "Your translations might also contain any static ({{staticValue}}) or random ({{randomValue}}) values, which are taken directly from the model.",
    "DATA_TO_DIRECTIVE" : "And it's no matter if you use filter or directive: static is still {{staticValue}} and random is still {{randomValue}}.",
    "RAW_TO_FILTER"     : "In case you want to pass a {{type}} data to the filter, you have only to pass it as a filter parameter.",
    "RAW_TO_DIRECTIVE"  : "This trick also works for {{type}} with a small mods.",
    "SERVICE"        : "Of course, you can translate your strings directly in the js code by using a $translate service.",
    "SERVICE_PARAMS" : "And you are still able to pass params to the texts. Static = {{staticValue}}, random = {{randomValue}}."
  });*/


  // Tell the module what language to use by default
  $translateProvider.preferredLanguage('en_US');

}])