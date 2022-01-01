var executed = false

$(document).ready(function () {
	// eel.email_click()
	$("#input").keyup(function (event) {
		if (event.which === 13) {
			var input_field = document.getElementById("input").value;
			executed = true
			IsEmpty(input_field);
		}
	});
	
});
function IsEmpty(value) {
	if (value == "") {
		alert("Please enter an Email");
	} else {
		emailSameCheck()
	}
	return;
}
function emailSameCheck() {
	var input = document.getElementById("input").value;
	var first_email = document.getElementById(
		"email_disclaimer_email"
	).innerHTML;
	if (input === first_email) {
		console.log("they are the same");
	} else {
		console.log("not the same");
	}
}

function move_email() {
	var email_disclaimer_email = document.getElementById(
		"email_disclaimer_email"
	);
	var input_field = document.getElementById("input").value;
	email_disclaimer_email.innerHTML = input_field;
	email_disclaimer_email.classList.add("red");
	show_item("email_disclaimer");
	show_item("email_disclaimer2");
}


function check_email() {
	// if (input != first_email) {
	// 	console.log("not the same");
	// } else {
	// 	console.log("they are the same");
	// }

	// console.log(input_field)

	// $("#email_disclaimer_email").text(input_field)


	$("#input").keyup(function (event) {
		if (event.which === 13) {
			var input = document.getElementById("input").value;
			var first_email = document.getElementById(
				"email_disclaimer_email"
			).innerHTML;
			// $("#start_countdown").click();
			// console.log(input)
			// console.log(first_email)
			// startCountdown();
			// console.log("start countdown ran");

		}
	});

	$(document).ready(function () {
		
	});
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

			// eel.take_photo();
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
			// eel.take_photo();
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

			// eel.take_photo();
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

			// eel.take_photo();
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
	show_item("emailContainer");
	show_item("email_sent");
	show_item("EmailShow");
	hide_item("email_disclaimer");
	hide_item("email_disclaimer2");
	hide_item("email_disclaimer_email");
	hide_item("input");
	hide_item("enter_email");

	emailSentDismiss();
	photoHide();
	hide_item("countdown");
	// resetEmail();
}

// outputs the content of the text file
// eel.expose(showEmail);
// function showEmail(answer) {
// 	var outputDiv = document.getElementById("result");
// 	outputDiv.innerHTML = "Your email: " + answer;
// }

function startCountdown() {
	// eel.write_num();
	show_item("countdown");
	getEmail();
	hide_item("emailContainer");
	// eel.init_click();
	startTimer();
}

// eel.expose(getEmail);
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
	element.classList.add("hide");
}
function show_item(element) {
	var element = document.getElementById(element);
	element.classList.remove("hide");
	element.classList.add("show");
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
