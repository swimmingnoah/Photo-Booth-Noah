$(document).ready(function() {
    $("#input").keyup(function(event) {
        if (event.which === 13) {
            $("#start_countdown").click();
        }
    });
});


function startTimer_again_1() {
	var timeleft = 6;
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "Cheese!!";
			startTimer_again_2();

			getPhotoWait(3);

			show_item("item2");

			eel.take_photo();
		} else {
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);
}
function startTimer_again_2() {
	var timeleft = 6;
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "Cheese!!";
			startTimer_again_3();
			eel.take_photo();
			getPhotoWait(2);

			show_item("item3");
		} else {
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);
}
function startTimer_again_3() {
	var timeleft = 6;
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "Cheese!!";

			getPhotoWait(1);

			show_item("item4");
			show_item("element");
			hide_item("countdown");

			eel.take_photo();
			movePhotoWait();
			var filename = "www/Sent Photos/" + getEmail() + "/Final.jpg";
			sendPhotoWait(filename)
			console.log(filename);
		} else {
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);
}

// eel.expose(startTimer);
function startTimer() {
	var timeleft = 7;
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "Cheese!!";

			eel.take_photo();
			getPhotoWait(4);
			show_item("item1");

			startTimer_again_1();
		} else {
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);
}

// outputs the content of the text file
// eel.expose(showEmail);
// function showEmail(answer) {
// 	var outputDiv = document.getElementById("result");
// 	outputDiv.innerHTML = "Your email: " + answer;
// }

function startCountdown() {
	eel.write_num();
	show_item("countdown");
	startTimer();
	getEmail();
	hide_item("element");
	eel.init_click();
}



eel.expose(getEmail);
function getEmail() {
	var textbox = document.getElementById("input");
	email = textbox.value;
	console.log("Js Email: " + email);

	var outputDiv = document.getElementById("result");
	outputDiv.innerHTML = "Your email: " + email;
	return email;
}

function hide_item(element) {
	var element = document.getElementById(element);
	element.classList.add("hide");
}
function show_item(element) {
	var element = document.getElementById(element);
	element.classList.remove("hide");
	element.classList.add("show");
}

function doTimes() {
	console.log("ran");
}

function check_email() {
	checkEmail = document.getElementById("EmailShow");
	//   checkEmail.innerHTML = Show_email();
	checkEmail.innerHTML = "Is Your Email: " + Show_email() + " ?";
}
// document.getElementById('button').addEventListener("click", function() {
//     alert("You clicked me");
//     console.log("you clicked")
// }​);​

// function changePhoto1(number) {
// 	var outputTarget = document.getElementById("item1");
// 	outputTarget.src = "Photos/IMG_000" + number + ".jpg";
// }
// function changePhoto2(number) {
// 	var outputTarget = document.getElementById("item2");
// 	outputTarget.src = "Photos/IMG_000" + number + ".jpg";
// }
// function changePhoto3(number) {
// 	var outputTarget = document.getElementById("item3");
// 	outputTarget.src = "Photos/IMG_000" + number + ".jpg";
// }
// function changePhoto4(number) {
// 	var outputTarget = document.getElementById("item4");
// 	outputTarget.src = "Photos/IMG_000" + number + ".jpg";
// }

