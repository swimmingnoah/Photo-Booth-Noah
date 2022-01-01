function getPhoto(number) {
	$.ajax({
		type: "GET",
		url: "Photo_num.txt",
		dataType: "text",
		success: function (data) {
			processData(data);
		},
	});

	function processData(data) {
		var lines = data.trim().split("\n");
		var lastLine = lines[lines.length - number].split(",");

		lastLine.forEach(function (value, i) {
			var outputTarget = document.getElementById("item" + number);
			// var outputTest = document.getElementById("name" + number);
			if (outputTarget) {
				outputTarget.src = "Photos/IMG_" + value + ".jpg";
				// outputTest.innerHTML = value;
			}
		});
	}
}

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

async function getPhotoWait(number) {
	await delay(2000);
	getPhoto(number)


}
async function movePhotoWait() {
	await delay(3000);
	
	// eel.runApp(getEmail())


}
async function sendPhotoWait(filename) {
	await delay(3000)
	// eel.email_send_attachment(filename, getEmail());
}

async function emailSentDismiss(){
	await delay(6000)
	hide_item("email_sent")
	location.reload();
}

async function photoHide() {  
	await delay(6000)
	hide_item("item4")
	hide_item("item3")
	hide_item("item2")
	hide_item("item1")
}





// $(document).ready(function() {
//   $.ajax({
//     type: "GET",
//     url: "data.csv",
//     dataType: "text",
//     success: function(data) {processData(data)}
//   });

//   function processData(data) {
//     var lines = data.trim().split('\n');
//     var lastLine = lines[lines.length - 1].split(',');

//     lastLine.forEach(function(value, i) {
//       var outputTarget = document.getElementById(`output${i}`);

//       if (outputTarget) {
//         outputTarget.innerHTML = value
//       }
//     })
//   }
// })
