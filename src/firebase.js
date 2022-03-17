import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYa6gCSAE8sti-pFmzGZaVL47sEl_4bvQ",
  authDomain: "facey-3d326.firebaseapp.com",
  projectId: "facey-3d326",
  storageBucket: "facey-3d326.appspot.com",
  messagingSenderId: "484205748012",
  appId: "1:484205748012:web:0ece6401eea124aea61689"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage();

export { firebase ,db, auth, storage}
