import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnTfetUVCXwmh2OvOKDapf23cuOm7v-iQ",
    authDomain: "wassertim-crwn-db.firebaseapp.com",
    databaseURL: "https://wassertim-crwn-db.firebaseio.com",
    projectId: "wassertim-crwn-db",
    storageBucket: "",
    messagingSenderId: "203382097129",
    appId: "1:203382097129:web:c6688f7e70d536f0"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
