const firebaseConfig = {
  apiKey: "AIzaSyDcLOVVGXbG7L6Vhtc97CMw63CZyWr809Y",
  authDomain: "contactform-7748b.firebaseapp.com",
  databaseURL: "https://contactform-7748b-default-rtdb.firebaseio.com",
  projectId: "contactform-7748b",
  storageBucket: "contactform-7748b.appspot.com",
  messagingSenderId: "585271406719",
  appId: "1:585271406719:web:161430cc6ebb98cecf8f4a",
  measurementId: "G-YB9P6ZD95N"
};

firebase.initializeApp(firebaseConfig);

var contactformDB=firebase.database().ref("contactform");

document.getElementById('contactform').addEventListener('submit',submitform);

function submitform(e){
  e.preventDefault();
var name=getElementVal("name");
var emailid =getElementVal("emailid");
var msgcontent= getElementVal("msgcontent");

console.log(name,emailid,msgcontent);

}



function getElementVal(id) {
  return document.getElementById(id).value;
}