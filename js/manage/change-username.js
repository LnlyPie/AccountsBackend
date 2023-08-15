firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('User is logged in:', user.displayName);
    } else {
        console.log('No user is currently logged in.');
        window.location.replace("../../login");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const usernameForm = document.getElementById('username-form');

    usernameForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent form submission

        const newUsername = usernameForm.newUsername.value;
        const user = firebase.auth().currentUser;

        if (!user) {
            console.log('No user is currently logged in.');
            return;
        }

        try {
            await user.updateProfile({
                displayName: newUsername,
            });

            console.log('Username changed successfully!');
            alert('Username changed successfully!');
            window.location.replace("../../account");
        } catch (error) {
            console.error('Error changing username:', error.message);
            alert('Error changing username: ' + error.message);
        }
    });
});

function goBack() {
    window.location.replace("../../account");
}