import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: VUE_APP_FIREBASE_API_KEY,
  authDomain: VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: VUE_APP_FIREBASE_APP_ID
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }