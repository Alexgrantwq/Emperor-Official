function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => alert("Welcome " + result.user.displayName))
    .catch(error => alert("Login failed: " + error.message));
}
function phoneLogin() {
  alert("Phone OTP Login requires HTTPS & Firebase hosting to work.");
}