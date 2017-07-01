//Creacion de usuarios
/*objeto constructor
function usuario(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new usuario("John", "Doe", 50, "blue");
var myMother = new usuario("Sally", "Rally", 48, "green");

//...........................

$('#Add').on('click',function(event){
  
  event.preventDefault();
  
  var _List = $.parseJSON($('#AllData').val());
  
  
  var _newObj =  {
    'First': $('[name="First"]').val(),
    'Middle': $('[name="Middle"]').val(),
    'Last': $('[name="Last"]').val(),    
  };
  
  
  _List.push(_newObj);
})

//...........................

$(document).ready(function() {
		$(window).unload(saveSettings);
		loadSettings();
	});

	function loadSettings() {
		$('#height').val(localStorage.height);
		$('#weight').val(localStorage.weight);
		$('#dateOfBirth').val(localStorage.dateOfBirth);
		$('input[value="' + localStorage.gender + '"]').prop('checked', true);
		$("#sportive").val(localStorage.sportive);
	}

	function saveSettings() {
		localStorage.height = $('#height').val();
		localStorage.weight = $('#weight').val();
		localStorage.dateOfBirth = $('#dateOfBirth').val();
		localStorage.sportive = $("#sportive").val();
		localStorage.gender = $('input[type=radio]:checked').val();
	}

*/
/*........................................ */

$(document).ready(function() {
	$('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        startingTop: '4%', // Starting top style attribute
        endingTop: '100%' // Ending top style attribute
    });

	
	$("#btn-save").click(function() {
		localStorage.setItem('nombres', $('#nombre3').val());
		$('#nombre3').val("");	
	});

	//Imprime el nombre
	var nom = localStorage.getItem('nombres');
	$('#imprimir').html(nom);

	$("#btn-verify").click(function(event) {
		localStorage.setItem('codigos', $('#codigo-input').val());
	});
	
	var codig = localStorage.getItem('codigos');
		$('#imprimir2').html(codig);
});


/*Codigo
var codigoUsuario = XXX;
var codigoInput = $("#codigo-input").val();

if(codigoInput == codigoUsuario){
		window.open('signup.html','_self',false);
}
*/