import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBjxc4DPH0f9jA-Nu52_xUb9fpupx1xbG8",
    authDomain: "musique-4bcd8.firebaseapp.com",
    databaseURL: "https://musique-4bcd8-default-rtdb.asia-southeast1.firebasedatabase.app/userInfo",
    projectId: "musique-4bcd8",
    storageBucket: "musique-4bcd8.appspot.com",
    messagingSenderId: "271244205461",
    appId: "1:271244205461:web:a27cbf4b63c36e6dacaa9c",
    measurementId: "G-GJH32EPW7J"
};
// init firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export {app, database};