// from data.js
var tableData = data;

//Select table body, date field, filter button
var tbody = d3.select("tbody");
var dateFilter = d3.select("#datetime");
var filterBtn = d3.select("#filter-btn");

//Function for filter button click
function filterClickHandler() {
    tbody.html("");

    //Filter the data
    var filteredData = tableData.filter(sighting => sighting.datetime === dateFilter.property("value"));

    //Loop through filtered data
    filteredData.forEach((sighting) => {
        //Append a new row
        var row = tbody.append("tr");

        //Append each cell
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

      //Print Console message
      console.log("Data was filtered.")
}

//Filter data


// Fill out table
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Handle click event for filter button
filterBtn.on("click", filterClickHandler);