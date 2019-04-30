// from data.js
let tableData = data;
console.log(tableData)

const tbody = d3.select("tbody");

function addRows(newRows){
	tbody.html("");

	newRows.forEach((tableData) => {
		var row = tbody.append("tr");
		Object.entries(tableData).forEach(([key, value]) => {
    	var cell = row.append("td");
    	cell.text(value);
  		});
	});
};

addRows(tableData)
//onClick Function

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log("This is the inputvalue" + inputValue);

  var filteredData = tableData.filter(table => table.datetime === inputValue);

  console.log("This is filtereddata" + filteredData);

  addRows(filteredData)

});

