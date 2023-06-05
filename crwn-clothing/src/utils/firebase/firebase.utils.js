// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnA-24xvKuGIdlp_ypYCuuVy5FWrfWXG0",
  authDomain: "crwn-clothing-db-21625.firebaseapp.com",
  projectId: "crwn-clothing-db-21625",
  storageBucket: "crwn-clothing-db-21625.appspot.com",
  messagingSenderId: "446117378844",
  appId: "1:446117378844:web:4eecd8601c2a14410b18d9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
