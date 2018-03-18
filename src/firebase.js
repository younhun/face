import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCOj2atlQS_lufEkoyHm7HHjK3oi_Npfq0",
    authDomain: "face-64489.firebaseapp.com",
    databaseURL: "https://face-64489.firebaseio.com",
    projectId: "face-64489",
    storageBucket: "face-64489.appspot.com",
    messagingSenderId: "532162191721"
  };
  firebase.initializeApp(config);

export default firebase;