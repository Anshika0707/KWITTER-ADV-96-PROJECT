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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName('this.id')'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}