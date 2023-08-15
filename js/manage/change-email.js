firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('User is logged in:', user.displayName);
    } else {
        console.log('No user is currently logged in.');
        window.location.replace("../../login");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('email-form');

    emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const newEmail = emailForm.newEmail.value;
        const user = firebase.auth().currentUser;

        if (!user) {
            console.log('No user is currently logged in.');
            return;
        }

        try {
            if (newEmail !== user.email) {
                await user.updateEmail(newEmail);
                await user.sendEmailVerification();
                console.log('Email changed successfully!');
                alert('Email changed successfully!\nVerify your new email.');
                window.location.replace("../../account");
            } else {
                console.log('Error: New email matches current email.');
                alert('Error: New email matches current email.');
            }
        } catch (error) {
            console.error('Error changing email:', error);
            alert('Error changing email: ' + error.message);
        }
    });
});

function goBack() {
    window.location.replace("../../account");
}