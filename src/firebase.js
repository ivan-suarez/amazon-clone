import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCfg2glz_L2JLAFG8bERWJIPS8ymn7O-_k",
    authDomain: "clone-fabef.firebaseapp.com",
    projectId: "clone-fabef",
    storageBucket: "clone-fabef.appspot.com",
    messagingSenderId: "1080223649042",
    appId: "1:1080223649042:web:06e1580679ef714c3fb7cb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}