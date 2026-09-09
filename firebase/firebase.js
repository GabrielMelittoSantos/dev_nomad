
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAEV2m_WZvOd91Y-YkEdL9q8JqhHqxIo8o",
  authDomain: "dev-nomad-melitto.firebaseapp.com",
  projectId: "dev-nomad-melitto",
  storageBucket: "dev-nomad-melitto.firebasestorage.app",
  messagingSenderId: "242513356734",
  appId: "1:242513356734:web:46b70a12926ad219407bef",
  measurementId: "G-YYD4XB63T7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);