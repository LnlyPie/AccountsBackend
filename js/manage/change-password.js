firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('User is logged in:', user.displayName);
    } else {
        console.log('No user is currently logged in.');
        window.location.replace("../../login");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');

    passwordForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const newPassword = passwordForm.newPassword.value;
        const user = firebase.auth().currentUser;

        if (!user) {
            console.log('No user is currently logged in.');
            return;
        }

        try {
            if (newPassword !== user.Password) {
                await user.updatePassword(newPassword);
                console.log('Password changed successfully!');
                alert('Password changed successfully!');
                window.location.replace("../../account");
            } else {
                console.log('Error: New password matches current password.');
                alert('Error: New password matches current password.');
            }
        } catch (error) {
            console.error('Error changing password:', error);
            alert('Error changing password: ' + error.message);
        }
    });
});

function goBack() {
    window.location.replace("../../account");
}