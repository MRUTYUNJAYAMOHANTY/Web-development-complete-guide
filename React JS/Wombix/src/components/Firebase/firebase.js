import app from 'firebase/app';
import * as firebase from 'firebase'
import 'firebase/auth';
// import 'firebase/database';
import 'firebase/storage'
// import firestore from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAMutAW42EBZwpUELVsEh_nBOTaKynTMB8",
  authDomain: "login-register-api-d34ae.firebaseapp.com",
  databaseURL: "https://login-register-api-d34ae.firebaseio.com",
  projectId: "login-register-api-d34ae",
  storageBucket: "login-register-api-d34ae.appspot.com",
  messagingSenderId: "1089477250994",
  appId: "1:1089477250994:web:e7195b3755ae6fb1449eab",
  measurementId: "G-WWCSZ5TL54"
};

// const config = {
//   apiKey: "AIzaSyDX8Iy5SDjfZc9FVmmzF2YeF-axErt1U0M",
//   authDomain: "wombix-123.firebaseapp.com",
//   databaseURL: "https://wombix-123.firebaseio.com/",
//   projectId: "wombix-123",
//   storageBucket: "gs://wombix-123.appspot.com/",
//   messagingSenderId: "1089477250994",
//   appId: "1:1089477250994:web:e7195b3755ae6fb1449eab",
//   measurementId: "G-WWCSZ5TL54"
// };

class Firebase {
  constructor() {
    // app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}
firebase.initializeApp(config);
firebase.firestore().settings({});
firebase.analytics()
const auth = firebase.auth();
// export const db = firebase.firestore();
const storage = firebase.storage();
// export default Firebase;
// export default firebase;
export {
  auth, storage, firebase, Firebase as default
}
