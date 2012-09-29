
require(['assets/javascripts/views/test'], function (test) {
	// This function is called when views/test.js is loaded.
    // If test.js calls define(), then this function is not fired until
    // test's dependencies have loaded, and the test argument will hold
    // the module value for "views/test".
	
	var testView = new test.View({ 'el': $('#home-button-go') });
	
});
