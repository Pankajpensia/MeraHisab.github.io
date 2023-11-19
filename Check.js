import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
   import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// Initialize Firebase
const firebaseConfig = {
 apiKey: "AIzaSyCVlKPvkcfTvadXA83BzdeR7LsH3MPHzKk",
 authDomain: "mera-hisab-cd31c.firebaseapp.com",
 databaseURL: "https://mera-hisab-cd31c-default-rtdb.firebaseio.com",
 projectId: "mera-hisab-cd31c",
 storageBucket: "mera-hisab-cd31c.appspot.com",
 messagingSenderId: "209448682832",
 appId: "1:209448682832:web:40bc61b9b02ffc5fb0d855",
 measurementId: "G-D39XZXJM4F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let i
// Check if the user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
     window.open("index.html")
  } else {
     window.open("Login.html")
   }
});


