import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDY94-YMG-fKZM_m7uULCss-_M7OVZ0Mac",
  authDomain: "signup-page-da22f.firebaseapp.com",
  projectId: "signup-page-da22f",
  storageBucket: "signup-page-da22f.appspot.com",
  messagingSenderId: "933739896378",
  appId: "1:933739896378:web:79550e96e1a50a768a5f03",
  measurementId: "G-3SFD2XB2LZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Tab switcher
window.showForm = function (type) {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const signupTab = document.getElementById('signup-tab');
  const loginTab = document.getElementById('login-tab');

  if (type === 'signup') {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
  } else {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    signupTab.classList.remove('active');
    loginTab.classList.add('active');
  }
};

// Popup function
function showPopup(message) {
  const popup = document.getElementById('popup-success');
  const popupText = document.getElementById('popup-text');

  popupText.textContent = message;
  popup.classList.add('show');
  popup.classList.remove('hidden');

  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }, 2000);
}

// Sign Up
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById('signup-success').style.display = 'flex';
      showPopup("Signup Successful!");

      setTimeout(() => {
        window.location.href = "Proj.html";
      }, 2000);
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById('login-success').style.display = 'flex';
      showPopup("Login Successful!");
    })
    .catch((error) => {
      alert(error.message);
    });
});
