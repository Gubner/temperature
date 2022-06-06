const thermIcons = ["fa fa-thermometer-0", "fa fa-thermometer-1", "fa fa-thermometer-2", "fa fa-thermometer-3", "fa fa-thermometer-4"];


$(document).ready(function(){
	window.addEventListener('message', function(event) {
	switch(event.data.action) {
		case "updateTemp":
			thermUpdate(event.data);
			break;
		case "hide":
			thermHide();
			break;
		case "show":
			thermShow();
			break;
		}
	})
});

function thermUpdate(data) {
	var tempF = Math.round((data.temp * 1.8) + 32)
	var thermIndex
	if (tempF < 33) {
		thermIndex = 0;
	} else if (tempF < 55) {
		thermIndex = 1;
	} else if (tempF < 81) {
		thermIndex = 2;
	} else if (tempF < 90) {
		thermIndex = 3;
	} else {
		thermIndex = 4;
	}
	var thermometer = document.getElementById("thermometer");
	thermometer.style.left = data.x + 'vw';
	thermometer.style.top = data.y + 'vh';
	if (data.disp) {
		thermometer.innerHTML = '<i class="' + thermIcons[thermIndex] + '">&#160;<a class="temptext">' + data.text[thermIndex] + '</a></i>';
	} else {
		if (data.units == "F") {
			thermometer.innerHTML = '<i class="' + thermIcons[thermIndex] + '">&#160;<a class="temptext">' + tempF + '°F</a></i>';
		} else {
			thermometer.innerHTML = '<i class="' + thermIcons[thermIndex] + '">&#160;<a class="temptext">' + Math.round(data.temp) + '°C</a></i>';
		}
	}
	if (data.shadow) {
		thermometer.style.textShadow = '0px 0px 12px #000000';
	} else {
		thermometer.style.textShadow = 'none';
	}
	if (data.bgimage) {
		thermometer.style.backgroundImage = 'url("background.png")';
	}
	else if (data.bg) {
		thermometer.style.backgroundImage = 'none';
		thermometer.style.backgroundColor = data.bgcolor;
	} else {
		thermometer.style.backgroundImage = 'none';
		thermometer.style.backgroundColor = 'none';
	}
}