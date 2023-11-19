import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
   import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

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
   const database = getDatabase();

   const submitButton = document.querySelector("#submitBtn");
   submitButton.addEventListener("click", async function (e) {
     e.preventDefault();
     const mobileNumber = document.getElementById("email1").value + "@gmail.com";
     const password = document.getElementById("password").value;

     try {
       const userCredential = await signInWithEmailAndPassword(auth, mobileNumber, password);
       const user = userCredential.user;
       console.log("Success! Welcome back!");
       alert("Login Successfully ! Welcome back!");

       // Redirect to a new page or perform other actions
       window.open("index.html");
     } catch (error) {
       alert("Login Error");
       console.log(error);
     }
   });