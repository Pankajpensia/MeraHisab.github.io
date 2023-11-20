let SenderName = document.getElementById("text11");
let SendAmount = document.getElementById("SendAmount");
let ReceiveName = document.getElementById("text11d");
let ReceiveAmount = document.getElementById("ReciveAmount");
let SendMoneyBtn = document.querySelector("#SendMoney")
let ReceiveMoneyBtn = document.querySelector("#ReciveMoney")
let DocPage = document.getElementById("LastTask")
let LogOutBtn = document.getElementById("LogOutBtn")  
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getDatabase, ref,
  onValue,
  remove,
  set,
  push } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

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
const database = getDatabase();

 
let Mobile = localStorage.getItem("Mobile")

let SendRef = `${Mobile}=Send`
let ReceiveRef = `${Mobile}=Receive`

function SendMoneyForm(e) {
  e.preventDefault()
  const SendingDetails = SenderName.value;
  const SendingMoney = SendAmount.value;
var currentDate = new Date();

var day = currentDate.getDate(); // gets the day of the month (1-31)
var month = currentDate.getMonth() + 1; // gets the month (0-11), so we add 1
var hrs = currentDate.getHours();
var min = currentDate.getMinutes()

let time = `Date:- ${day}/${month} <br> Time:- ${hrs}-${min}`

  if (SendingDetails && SendingMoney) {
    const usersRef = push(ref(database, SendRef));
    set(usersRef, {
      Name: SendingDetails,
      Amount: SendingMoney,
      Time: time
    })
      .then(() => {
        alert("Record Added Successfully 🙂");
        location.reload();
        SenderName.value = "";
        SendAmount.value = "";
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  } else {
    alert("Please enter both a SenderName and a Amount");
  }
}

function ReciveMoneyForm(e) {
  e.preventDefault()
  const ReceivingDetails = ReceiveName.value;
  const ReceivingMoney = ReceiveAmount.value;

  if (ReceivingDetails && ReceivingMoney) {
    const usersRef = push(ref(database, ReceiveRef));
    set(usersRef, {
      Name: ReceivingDetails,
      Amount: ReceivingMoney
    })
      .then(() => {
        alert("Record Added Successfully 🙂");
        location.reload();
        ReceiveName.value = "";
        ReceiveAmount.value = "";
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  } else {
    alert("Please enter both a SenderName and a Amount");
  }
}

SendMoneyBtn.addEventListener("click", SendMoneyForm);

ReceiveMoneyBtn.addEventListener("click", ReciveMoneyForm);
