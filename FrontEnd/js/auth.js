import "./firebase-config.js";

async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert("Account created!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
}
