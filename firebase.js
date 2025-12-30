const firebaseConfig = {
  apiKey: "AIzaSyBkNje5kXc1xePkD6tRKiVfU_2En-yzuO0",
  authDomain: "learnity-8efb2.firebaseapp.com",
  projectId: "learnity-8efb2",
  storageBucket: "learnity-8efb2.firebasestorage.app",
  messagingSenderId: "283306440904",
  appId: "1:283306440904:web:ace87610ca03448acecdfd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); // global auth object