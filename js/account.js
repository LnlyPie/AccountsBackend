const usernameElement = document.getElementById('username');
const userEmailElement = document.getElementById('user-email');
const logoutButton = document.getElementById('logout-button');
const usernameChangeButton = document.getElementById('username-change');
const emailChangeButton = document.getElementById('email-change');
const passChangeButton = document.getElementById('pass-change');
const savesManagerButton = document.getElementById('manage-saves');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const username = user.displayName;
        const userEmail = user.email;
        usernameElement.textContent = username ? username : "N/A";
        userEmailElement.textContent = userEmail ? userEmail : "N/A";
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
        alert('Error logging out: ', error.message);
    }
});