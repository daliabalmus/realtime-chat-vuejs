import firebase from 'firebase';
// import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
       apiKey: "AIzaSyBrbRw5G65F_SGln_D7iSyiJNJ4fKJIsRg",
       authDomain: "realtime-chat-37ca6.firebaseapp.com",
       databaseURL: "https://realtime-chat-37ca6.firebaseio.com",
       projectId: "realtime-chat-37ca6",
       storageBucket: "realtime-chat-37ca6.appspot.com",
       messagingSenderId: "537059121823",
       appId: "1:537059121823:web:0a864e31146eeb1d4920aa",
       measurementId: "G-7KB09RDNFK"
   };
   // Initialize Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   export default firebaseApp.firestore();
   