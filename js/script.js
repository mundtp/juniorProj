var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

var table = document.createElement('table')
var container = document.querySelector('.container')

var makeTable = function(arr){

	var firstRow = document.createElement('tr')
	var firstObj = arr[0]
	// Build the first row with the existing keys
	for(var key in firstObj){
	      var header = document.createElement('th')
	      header.innerHTML = key.toUpperCase()
	      firstRow.appendChild(header)
	}

	table.appendChild(firstRow)
	
	// Create a row for each array element and add headers for each value
	arr.forEach(function(obj){
		var row = document.createElement('tr')

        for(var key in obj){
        var header = document.createElement('th')
        header.innerHTML = obj[key]
        row.appendChild(header)
        }

    table.appendChild(row)
    })

	container.appendChild(table);
}

makeTable(table_data)





// Bonus to move the table to different elements
var container = document.querySelector('.container') 
container.addEventListener('click',
	function(){
		container.appendChild(table)
	})
var container2 = document.querySelector('.container2') 
container2.addEventListener('click',
	function(){
		container2.appendChild(table)
	})
var container3 = document.querySelector('.container3')
container3.addEventListener('click',
	function(){
		container3.appendChild(table)
	})