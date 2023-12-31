// UI elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut');
const callWebApiButton = document.getElementById('callApiButton');
const label = document.getElementById('label');
const response = document.getElementById("response");

// updates the UI post login/token acquisition
function updateUI() {
    const userName = myMSALObj.getAccount().name;
    logMessage("User '" + userName + "' logged-in");

    signInButton.classList.add('d-none');
    signOutButton.classList.remove('d-none');

    // greet the user - specifying login
    label.innerText = "Hello " + userName;

    // add the callWebApi button
    callWebApiButton.classList.add('d-none');
		callWebApiButton.setAttribute('class', 'btn btn-primary');
		
		document.getElementsByTagName('body')[0].style.display = '';
}

// debug helper
function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}
