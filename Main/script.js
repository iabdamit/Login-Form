//! JavaScript function to handle the sign-in process
function signInWithGoogle() {
    gapi.auth2.getAuthInstance().signIn();
}

