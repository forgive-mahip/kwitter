// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD1U_F0NHGi5lFTTwtOVTBjtE-q4TQsBBw",
    authDomain: "kwitter-1d7a5.firebaseapp.com",
    databaseURL: "https://kwitter-1d7a5-default-rtdb.firebaseio.com",
    projectId: "kwitter-1d7a5",
    storageBucket: "kwitter-1d7a5.appspot.com",
    messagingSenderId: "439440100723",
    appId: "1:439440100723:web:ac4536b8cd5ff3829c0906",
    measurementId: "G-FZWJPPVSVN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addroom()
{
room_name=document.getElementById("roomname").value;
console.log(room_name)
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
}); 
localStorage.setItem("roomname",room_name);
window.location="kwitter_page.html";
}




