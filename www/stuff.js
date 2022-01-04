$(document).ready(function () {
	eel.email_click()
	$("#input").keyup(function (event) {
		if (event.which === 13) {
			// $("#start_countdown").click();

			check_email();
		}
	});
});
function IsEmpty(value) {
	if (value == "") {
		alert("Please enter an Email");
	}
	return;
}

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

			eel.take_photo();
			movePhotoWait();
			photosTaken();
			var filename = "www/Sent Photos/" + getEmail() + "/Final.jpg";
			sendPhotoWait(filename);
			console.log(filename);
		} else {
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);
}

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

function photosTaken() {

	show_item("item4");
	// show_item("emailContainer");
	show_item("finishedContainer");
	show_item("EmailShow");
	show_item("email_sent");
	hide_item("countdown");
	// hide_item("email_disclaimer");
	// hide_item("email_disclaimer2");
	// hide_item("email_disclaimer_email");
	// hide_item("input");
	// hide_item("enter_email");

	emailSentDismiss();
	photoHide();
	// resetEmail();

	
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
	getEmail();
	hide_item("emailContainer");
	hide_item("email_disclaimer");
	hide_item("email_disclaimer2");
	eel.init_click();
	startTimer();
}

eel.expose(getEmail);
function getEmail() {
	var textbox = document.getElementById("input");
	email = textbox.value;
	console.log("Js Email: " + email);

	// var outputDiv = document.getElementById("result");
	// outputDiv.innerHTML = "Your email: " + email;
	return email;
}

function hide_item(element) {
	var element = document.getElementById(element);
	element.classList.remove("show");
	element.classList.add("hide");
}
function show_item(element) {
	var element = document.getElementById(element);
	element.classList.remove("hide");
	element.classList.add("show");
}


function check_email() {
	var email_disclaimer_email = document.getElementById(
		"email_disclaimer_email"
	);
	var input_field = document.getElementById("input").value;
	// console.log(input_field)
	IsEmpty(input_field);
	show_item("email_disclaimer");
	show_item("email_disclaimer2");

	email_disclaimer_email.classList.add("red");

	// $("#email_disclaimer_email").text(input_field)
	email_disclaimer_email.innerHTML = input_field;

	$(document).ready(function () {
		$("#input").keyup(function (event) {
			if (event.which === 13) {
				// $("#start_countdown").click();
				startCountdown();
				console.log("start countdown ran");
			}
		});
	});

}
// function resetEmail() {
// 	var email_disclaimer_email = document.getElementById(
// 		"email_disclaimer_email"
// 	);
// 	var input_field = document.getElementById("input").value;
// 	// console.log(input_field)
// 	IsEmpty(input_field);
// 	show_item("email_disclaimer");
// 	show_item("email_disclaimer2");

// 	email_disclaimer_email.classList.remove("red");

// 	// $("#email_disclaimer_email").text(input_field)
// 	email_disclaimer_email.innerHTML = "Please Enter email and then press ENTER";
// }



// function removeEmailField() {
// 	var input = document.getElementById("input")
// 	input.value = ""
// }

