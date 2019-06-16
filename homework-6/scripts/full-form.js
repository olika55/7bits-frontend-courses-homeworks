// var search = window.location.search;
var paramsString = window.location.search.substr(1);
var searchParams = new URLSearchParams(paramsString);
var firstName, lastName, email, gender, firstNameEl, lastNameEl, emailEl, genderEl;

window.onload = function() {
	firstNameEl = document.getElementById('first-name');
	if(searchParams.has("firstName")){
		firstName = searchParams.get("firstName")
	}
	else{
		firstName = firstNameEl.getAttribute("placeholder");
	}
	firstNameEl.value = firstName;

	lastNameEl = document.getElementById('last-name');
	if(searchParams.has("lastName")){
		lastName = searchParams.get("lastName")
	}
	else{
		lastName = lastNameEl.getAttribute("placeholder");
	}
	lastNameEl.value = lastName;

	emailEl = document.getElementById('email');
	if(searchParams.has("email")){
		email = searchParams.get("email")
	}
	else{
		email = emailEl.getAttribute("placeholder");
	}
	emailEl.value = email;

	if(searchParams.has("gender")){
		gender = searchParams.get("gender")
	}
	else{
		gender = "male";
	}
	
	if(gender == "male"){
		document.getElementById("gender-male").checked = true;
		document.getElementById("gender-female").checked = false;
	}
	else{
		document.getElementById("gender-female").checked = true;
		document.getElementById("gender-male").checked = false;
	}
}