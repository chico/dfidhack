
define(['exports'], function (test) {

  'use strict';

  // PRIVATE UTILITY FUNCTIONS
  //
  // Only publicly expose functionality that code outside of the View should be
  // concerned with.  Other functions should be made private up here and called
  // from the View instance's various methods as needed.

  
  // This is where we define the View.  Every property on this Object is exposed publicly.
  test.View = Backbone.View.extend({
	'events': {
      'click': 'onClick'
    }
    ,'initialize': function (opts) {}
    ,'onClick': function (evt) {
    	console.log('click');
    }
  });

});
