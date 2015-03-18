$('button').on('click', function(){
	
	var grad1 = $(this).data('grad');
	var grad = $(this).data('grad') + ',Serbia';
	
	$.ajax({
		method: "GET",
    	url: "http://api.openweathermap.org/data/2.5/weather",
    	data: {	
    	q: grad,
    	units: "metric"
    	},
    	success: function(data){
    		$('#temp').css('visibility', 'visible');
			$('#izgrad').css('display', 'none');
			$('h1').css('visibility', 'visible');

    		var temperatura = data.main.temp;
    		var opis = data.weather[0].description;
    		var ikonica = data.weather[0].icon;
    		

    		$('h1').html(temperatura + "&deg;C" + " " + opis);
    		$('#ikonica').attr('src', 'http://openweathermap.org/img/w/' + ikonica + '.png');
    		$('#temp').text('Trenutna temperatura u ' + grad1 + 'u je:');


    	}









	});







});