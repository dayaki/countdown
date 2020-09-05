// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIL3wflXSg5DD6keVzzNX47nTzOcOMV2A",
  authDomain: "rog-timer.firebaseapp.com",
  databaseURL: "https://rog-timer.firebaseio.com",
  projectId: "rog-timer",
  storageBucket: "rog-timer.appspot.com",
  messagingSenderId: "49873760483",
  appId: "1:49873760483:web:d11309f0f95ee78ab795d6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCIL3wflXSg5DD6keVzzNX47nTzOcOMV2A",
//     authDomain: "rog-timer.firebaseapp.com",
//     databaseURL: "https://rog-timer.firebaseio.com",
//     projectId: "rog-timer",
//     storageBucket: "rog-timer.appspot.com",
//     messagingSenderId: "49873760483",
//     appId: "1:49873760483:web:d11309f0f95ee78ab795d6"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
