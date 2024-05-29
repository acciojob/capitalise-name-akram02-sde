//your JS code here. If required.
let name_box = document.getElementById("fname");

name_box.addEventListener("change", capital);

function capital(e) {
	let str = e.target.value;

	e.target.value = str.toUpperCase();
}