
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyB_rRtyajVdUKpsHzFxWoSRCuPsoCQCWUg",

  authDomain: "anoroam-game.firebaseapp.com",

  projectId: "anoroam-game",

  storageBucket: "anoroam-game.appspot.com",

  messagingSenderId: "281651049635",

  appId: "1:281651049635:web:4784cce2c188a0537e7b16",

  measurementId: "G-XE2KGTZWC7"

};
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  