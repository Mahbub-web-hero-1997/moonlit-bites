// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MoonLit_Bites_DB_apiKey,
  authDomain: process.env.MoonLit_Bites_DB_authDomain,
  projectId: process.env.MoonLit_Bites_DB_projectId,
  storageBucket: process.env.MoonLit_Bites_DB_storageBucket,
  messagingSenderId: process.env.MoonLit_Bites_DB_messagingSenderId,
  appId: process.env.MoonLit_Bites_DB_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
