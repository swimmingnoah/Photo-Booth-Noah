$(document).ready(function() {
    $("#input").keyup(function(event) {
        if (event.which === 13) {
            // $("#start_countdown").click();
			
			check_email()
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
	var email_disclaimer_email = document.getElementById("email_disclaimer_email");
	var email_disclaimer = document.getElementById("email_disclaimer")
	var input_field = document.getElementById("input").value
	// console.log(input_field)
	IsEmpty(input_field)
	show(email_disclaimer)
	show(email_disclaimer2)

	email_disclaimer_email.classList.add("red")
	
	// $("#email_disclaimer_email").text(input_field)
	email_disclaimer_email.innerHTML = input_field


	$(document).ready(function() {
		$("#input").keyup(function(event) {
			if (event.which === 13) {
				// $("#start_countdown").click();
				startCountdown()
				console.log("start countdown ran")
			}
		});
	});

	// checkEmail.innerHTML = "Is Your Email: " + input_field + " ?";
}


function hide(name) {
	name.classList.remove("show")
	name.classList.add("hide")
	// console.log("hide ran")
}
function show(name) {
	name.classList.remove("hide")
	name.classList.add("show")
	// console.log("show ran")

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

