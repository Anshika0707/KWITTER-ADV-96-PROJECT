//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB2MGv3i8kIAuTP0KYw7Ac9uNfeC_y4Oas",
      authDomain: "practice-dcf97.firebaseapp.com",
      databaseURL: "https://practice-dcf97-default-rtdb.firebaseio.com",
      projectId: "practice-dcf97",
      storageBucket: "practice-dcf97.appspot.com",
      messagingSenderId: "268909922640",
      appId: "1:268909922640:web:6785d9026adf2fe848c455",
      measurementId: "G-N0ZBK9VPZG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}