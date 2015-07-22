"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = 2

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
  debugger;
  var newHtml = '<div class="row"><div class="col-md-4 car"><h2>'
                  +carsJSON[0].Make+
                  '</h2><p><strong>Model:</strong> '
                  +carsJSON[0].Model+
                  '</p><p><strong>Year:</strong> '
                  + carsJSON[0].Year+
                  '</p></div><div class="col-md-4 car"><h2>'
                  +carsJSON[1].Make+
                  '</h2><p><strong>Model:</strong> '
                  + carsJSON[1].Model+
                  '</p><p><strong>Year:</strong> '
                  + carsJSON[1].Year+
                  '</p></div><div class="col-md-4 car"><h2>'
                  +carsJSON[2].Make+
                  '</h2><p><strong>Model:</strong> '
                  + carsJSON[2].Model+
                  '</p><p><strong>Year:</strong> '
                  + carsJSON[2].Year+
                  '</p></div></div>';
  return newHtml;
  // var string = '<div class="row">'

  // carsjSON.forEach(function(car){
  //   string += '<div class="col-md-4 car">'+
  //     '<h2>' + car.Make + '</h2>'
  //     '<p>'+'<strong>'+ 'Model:'+ '</strong>'+car.Model+'</p>'
  //     +'<p>'+'<strong>Year:</strong>'+ car.Year + '</p>'+
  //   '</div>';
  // })
  // string += '</div>';

  // return string;

}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars";
  var html = formatCars(carsJSON);
  $('#cars').append(html);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  debugger;
  pageNum++
  var numberOfCars = 3;
  var newUrl = baseUrl + pageNum + "/"+ numberOfCars; 
  $.ajax({
    url: newUrl,
    dataType: 'jsonp'
  })
  .done(function(data){
    addCarsToDOM(data)
  });
};