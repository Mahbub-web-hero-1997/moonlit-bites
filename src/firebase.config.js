// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCppFlzYSlfBBBs36LUZqmZCsmd4WZrTI8',
  authDomain: 'moonlitbites-661c4.firebaseapp.com',
  projectId: 'moonlitbites-661c4',
  storageBucket: 'moonlitbites-661c4.firebasestorage.app',
  messagingSenderId: '246869930282',
  appId: '1:246869930282:web:53cf2f90ae1416c25aee53',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
