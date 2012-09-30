
define(['exports'], function (Report) {

  'use strict';

  // PRIVATE UTILITY FUNCTIONS
  //
  // Only publicly expose functionality that code outside of the View should be
  // concerned with.  Other functions should be made private up here and called
  // from the View instance's various methods as needed.

  function calculateSavings(price, saving, numberTeasDaily) {
	  if (saving <= 0) {
		  return 0;
	  }
	  // TODO Is it per kilo?
	  var savingPerKilo = (price * saving / 100);
	  console.log("savingPerKilo: " + savingPerKilo);
	  
	  // TODO how many tea bags in 1 kilo?	  
	  // 440 tea bags if you search 440 tea bag 1kg
	  // 667 teag bags in 1 kilo according to http://www.funtrivia.com/askft/Question114635.html (302 tea bags in 453g of loose tea)
	  var teaBags1Kg = 440;
	  
	  var daysIn1Yr = 365;
	  var numberTeasAnually = numberTeasDaily * daysIn1Yr;
	  
	  console.log("numberTeasAnually: " + numberTeasAnually);
	  var amountTeaPerKiloAnnually = numberTeasAnually / teaBags1Kg;
	  
	  console.log("amountTeaPerKiloAnnually: " + amountTeaPerKiloAnnually);
	  
	  var savingsAnnually = amountTeaPerKiloAnnually * savingPerKilo;
	  
	  console.log("savingsAnnually: " + savingsAnnually);
	  
	  return savingsAnnually;
  }
  
  // This is where we define the View.  Every property on this Object is exposed publicly.
  Report.View = Backbone.View.extend({
	'events': {
      'click': 'onClick'
    }
    ,'initialize': function (opts) {}
    ,'onClick': function (evt) {
    	var country = $("#report-search-country").val();
    	var numberTeas = $("#report-search-number-teas").val();
    	if (country == "" || numberTeas == "") {
    		return false;
    	}
    	numberTeas = parseInt(numberTeas);
    	try {
	    	var result = 0;
	    	if ("canada" == country) {
	    		result = calculateSavings(2.69, 0.5, numberTeas);
	    	} else if ("ecuador" == country) {
	    		// no savings
	    		result = 0;
	    	} else if ("india" == country) {
	    		result = calculateSavings(0.27, 0.45, numberTeas);
	    	} else if ("nigeria" == country) {
	    		result = calculateSavings(1.05, 0.35, numberTeas);
	    	} else if ("south africa" == country) {
	    		// no savings
	    		result = 0;
	    	}    	
	    	$("#report-search-form").hide();
	    	$('#report-search-result').html("$" + result.toFixed(4) + " / year");
	    	$("#report-search-results").show();
    	} catch(e) {
	    	 console.log(e);
	    }
    	return false;
    }
  });

});
