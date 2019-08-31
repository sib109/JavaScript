// from data.js
var tableData = data;
// console.log(tableData);
// // YOUR CODE HERE!
tbody = d3.select("tbody");
tableData.forEach(function(populateUFO) {
// console.log(populateUFO);
var row = tbody.append("tr");
Object.entries(populateUFO).forEach(function([key, value]) {
// console.log(key, value);
var cell = row.append("td");
cell.text(value);
});
});
var submit = d3.select("#filter-btn");

// Button click procedure //

submit.on("click", function()
{


  // Get input for Date //
  var inputDate = d3.select("#datetime");
  var inputValDate = inputDate.property("value");

  // Filtering with Date //
  if (inputValDate === "" )
  {
    var filteredDate = tableData;
  }
  else{
    var filteredDate = tableData.filter(UFOdate => UFOdate.datetime === inputValDate);
  };


  // Get input for Country //
  var inputC = d3.select("#country");
  var inputValC = inputC.property("value");

  // Filtering with Country //
  if (inputValC === "" )
  {
    var filteredC = filteredDate;
  }
  else{
    var filteredC = filteredDate.filter(UFOc => UFOc.country === inputValC);
  };

  // Get input for City //
  var inputCity = d3.select("#city");
  var inputValCity = inputCity.property("value");

  // Filtering with City //
  if (inputValCity === "" )
  {
    var filteredCity = filteredC;
  }
  else{
    var filteredCity = filteredC.filter(UFOcity => UFOcity.city === inputValCity);
  };


  // Get input for Shape //
  var inputS = d3.select("#shape");
  var inputValS = inputS.property("value");

  // Filtering with Shape //
  if (inputValS === "" )
  {
    var filteredfinal = filteredCity;
  }
  else{
    var filteredfinal = filteredCity.filter(UFOs => UFOs.shape === inputValS);
  };

 // Get input for State //
 var inputSt = d3.select("#state");
 var inputValSt = inputSt.property("value");

 // Filtering with Shape //
 if (inputValSt === "" )
 {
   var filteredf = filteredfinal;
 }
 else{
   var filteredf = filteredfinal.filter(UFOst => UFOst.state === inputValSt);
 };


  // Populating with final filtered data //
  var tbody = document.createElement('tbody');

  tbody = d3.select("tbody");

//   filteredData


filteredf.forEach((pop1) =>
  {
    var row = tbody.append("tr");

    Object.entries(pop1).forEach(([key, value]) =>
    {
      var cell = tbody.append("td");
      cell.text(value);
     });
  });

});
