// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr42TsbYZ_eFUiof7ZN9pc8RKyrjs2VGU",
  authDomain: "auth-6f844.firebaseapp.com",
  projectId: "auth-6f844",
  storageBucket: "auth-6f844.firebasestorage.app",
  messagingSenderId: "119662945396",
  appId: "1:119662945396:web:c3d7bd43aeaebca3395d21",
  measurementId: "G-5S93XTDNQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export default  app 