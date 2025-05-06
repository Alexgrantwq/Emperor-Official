// Import the functions you need from the SDKs you need import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"; import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// Your web app's Firebase configuration const firebaseConfig = { apiKey: "AIzaSyAlX0agj3nrgKLzLyJmtmxyW...", // Replace with your full API key authDomain: "emperor-official-1.firebaseapp.com", projectId: "emperor-official-1", storageBucket: "emperor-official-1.appspot.com", messagingSenderId: "965972364647", appId: "1:965972364647:web:cdcdadda0ff2eb60c473c2", measurementId: "G-63M9HXELL5" };

// Initialize Firebase const app = initializeApp(firebaseConfig); const analytics = getAnalytics(app);

