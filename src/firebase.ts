// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAiwjvHhFqof20g9yJ9tC8vN79FK6h9XcA',
  authDomain: 'twitter-clone-firebase-f1fe4.firebaseapp.com',
  projectId: 'twitter-clone-firebase-f1fe4',
  storageBucket: 'twitter-clone-firebase-f1fe4.appspot.com',
  messagingSenderId: '924875936921',
  appId: '1:924875936921:web:2bd8c631d1a18b40279408',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
