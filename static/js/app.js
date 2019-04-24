// from data.js
let tableData = data;
// console.log(tableData)

const tbody = d3.select("tbody");

tableData.forEach((x) => {
	// console.log(x)
	var row = tbody.append("tr");
	Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


let dateInput = d3.select("#filter-btn")

dateInput.on("click", function() {

	d3.event.preventDefault();

	let inputField = d3.select("#date").property("value")
	

	let filterDate = tableData.filter(x => x.datetime === inputField)

	if filterDate === true{
		let rows = table.select("tbody").selectAll("tr")
		rows.sort
	}


});