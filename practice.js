
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD7L-c5uZhSbtKaHZKieTgZ_EWXLuhA_DA",
    authDomain: "kwitter-project-class.firebaseapp.com",
    databaseURL: "https://kwitter-project-class-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-class",
    storageBucket: "kwitter-project-class.appspot.com",
    messagingSenderId: "205964313747",
    appId: "1:205964313747:web:cd06443289df4f670db966"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update(
          {
              purpose: "adding user"
          }
      );
  }