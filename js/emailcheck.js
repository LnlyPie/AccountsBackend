firebase.auth().onAuthStateChanged(function(user) { 
    if (user.emailVerified) {
        console.log('Email is verified');
    }
    else {
        console.log('Email is not verified');
        window.location.replace("/verifyemail.html");
    }
});