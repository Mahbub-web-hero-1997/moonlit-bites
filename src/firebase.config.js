// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAajdQN9clN6a8g8ETXjW-8sg5y7xXa0Ys',
  authDomain: 'moonlitbit-1b371.firebaseapp.com',
  projectId: 'moonlitbit-1b371',
  storageBucket: 'moonlitbit-1b371.firebasestorage.app',
  messagingSenderId: '302823177538',
  appId: '1:302823177538:web:f9714437c766bc0d1a1cdb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
