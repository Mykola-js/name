//FrontEnd Scripts
var source= [ " Twenty-eight guineas." ,
' Rosemary gave no sign. Even if one is rich...',
' Her voice was dreamy as she answered: "Well,',
' keep it for me, will you The shopman',
'  bowed. He would be willing of course, to keep it for her forever.',
'Outside rain was falling, there was a cold, bitter taste in the air',
'and the newly lighted lamps looked sad... At that very moment a'
]

var tbody= document.getElementById('tbody')

var sortUp= function(){
	source.sort( function(a,b) {
	if( a < b){
		return 1
	} else
	if( a > b ){
		return -1
	} else { return 0 }
	} )
}

var sortDown= function(){
	source.sort( function(a,b) {
	if( a > b){
		return 1
	} else
	if( a < b ){
		return -1
	} else { return 0 }
	} )
}
frogLog:
var tableRender= function(data){

	tbody.innerHTML= ''
	for(var item of data){
		var row = document.createElement('tr');
		tbody.appendChild( row )

		var cell_Name= document.createElement('td')
		cell_Name.innerText=item
row.appendChild( cell_Name )

if(item==undefined){
cell_Name.innerText='-'
}
	}
}

tableRender(source)

document.getElementById('sort-down').addEventListener('click',
	function(event){
		sortDown()
		tableRender(source)
	})

document.getElementById('sort-up').addEventListener('click',
	function(event){
		sortUp()
		tableRender(source)
	})

  document.getElementById('addButton').addEventListener('click',
function (event) {
source.push(document.getElementById('addText').value)
tableRender(source)
})

document.getElementById('addButtonTwo').addEventListener('click',
function (event) {
  delete source[document.getElementById('addTextTwo').value]
  tableRender(source)
})
