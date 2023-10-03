const usernameElement = document.getElementById('username');
const userEmailElement = document.getElementById('user-email');
const logoutButton = document.getElementById('logout-button');
const usernameChangeButton = document.getElementById('username-change');
const emailChangeButton = document.getElementById('email-change');
const passChangeButton = document.getElementById('pass-change');
const savesManagerButton = document.getElementById('manage-saves');
const deleteAccountButton = document.getElementById('delete-account');

var userEmailGlobal = null;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const username = user.displayName;
        userEmailGlobal = user.email;
        usernameElement.textContent = username ? username : "N/A";
        userEmailElement.textContent = userEmailGlobal ? "*****" : "N/A";
    } else {
        console.log('No user is currently logged in.');
        window.location.replace("../login");
    }
});

usernameChangeButton.addEventListener('click', () => {
    window.location.href = "../manage/change-username";
});

emailChangeButton.addEventListener('click', () => {
    window.location.href = "../manage/change-email";
});

passChangeButton.addEventListener('click', () => {
    window.location.href = "../manage/change-password";
});

savesManagerButton.addEventListener('click', () => {
    window.location.href = "../manage/saves";
});

logoutButton.addEventListener('click', async () => {
    try {
        await firebase.auth().signOut();
        console.log('User logged out successfully');
        window.location.replace("../login");
    } catch (error) {
        console.error('Error logging out:', error.message);
        alert('Error logging out: ' + error.message);
    }
});


deleteAccountButton.addEventListener('click', async () => {
    const confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmDelete) {
        try {
            await firebase.auth().currentUser.delete();
            console.log('User account deleted successfully');
            alert('Your account has been deleted.');
            window.location.replace("../login");
        } catch (error) {
            console.error('Error deleting account:', error.message);
            alert('Error deleting account: ' + error.message);
        }
    }
});

function showEmail() {
    var x = document.getElementById("user-email");
    if (x.textContent != "*****") {
        x.textContent = "*****";
    } else if (x.textContent === "N/A") {
        console.error('User\'s email couldn\'t be loaded.')
    } else {
        x.textContent = userEmailGlobal;
    }
}