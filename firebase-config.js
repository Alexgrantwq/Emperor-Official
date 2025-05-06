// Firebase configuration import { initializeApp } from "firebase/app"; import { getAnalytics } from "firebase/analytics";

const firebaseConfig = { apiKey: "AIzaSyAlX0agj3nrgKLZLyJmtmxyW...", authDomain: "emperor-official-1.firebaseapp.com", projectId: "emperor-official-1", storageBucket: "emperor-official-1.appspot.com", messagingSenderId: "965972364647", appId: "1:965972364647:web:cdcdadda0ff2eb60c473c2", measurementId: "G-03M9HXELL5" };

const app = initializeApp(firebaseConfig); const analytics = getAnalytics(app);

