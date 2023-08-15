const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = registrationForm.email.value;
    const password = registrationForm.password.value;
    const username = registrationForm.username.value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        await user.updateProfile({
            displayName: username,
        });

        console.log('User registered successfully:', user);
        firebase.auth().onAuthStateChanged(function(user) {
            user.sendEmailVerification(); 
        });
        window.location.replace("../account");
    } catch (error) {
        console.error('Error registering user:', error.message);
        alert('Error: ', error.message);
    }
});