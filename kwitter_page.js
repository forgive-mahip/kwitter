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
    username=localStorage.getItem("user");
    roomname=localStorage.getItem("roomname")
    function send(){
msg=document.getElementById("msg").value
firebase.database().ref(roomname).push({
    name:username,
    message:msg,
    like:0
});

}
function getData() 
{ firebase.database().ref("/"+roomname).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
  { childKey = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
        //Start code
         console.log(firebase_message_id); console.log(message_data);
          name = message_data['name']; message = message_data['message']; 
          like = message_data['like']; 
          console.log(message); console.log(name); console.log(like)
          namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
          messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
          likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+ " onclick='updatelike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
          row=namewithtag+messagewithtag+likebutton+span_with_tag;
          document.getElementById("output").innerHTML=row;
    }
});
 });
}
getData();
function updatelike(messageid)
{
    likes=document.getElementById(messageid).value;
    updadetelike=Number(likes)+1 
    firebase.database().ref(roomname).child(messageid).update({
        like:updadetelike

    });
}