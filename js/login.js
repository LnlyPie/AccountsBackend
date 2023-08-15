const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully');
        window.window.location.replace("../account");
    } catch (error) {
        console.error('Error logging in:', error.message);
        alert('Error: ', error.message);
    }
});
