
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAPTtDwvK8tZ8H1pwUsQkVOWqxwWYsK35k",
  authDomain: "slsd-capstone-project.firebaseapp.com",
  databaseURL: "https://slsd-capstone-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slsd-capstone-project",
  storageBucket: "slsd-capstone-project.appspot.com",
  messagingSenderId: "523851281455",
  appId: "1:523851281455:web:0bd17f06996c6be03f82da",
  measurementId: "G-P5N25B4ZY7"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;