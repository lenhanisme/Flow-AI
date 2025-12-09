import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOm6pFhpGs2cuXog4t2hXMfsltmCgoafs",
  authDomain: "flow-wallet-43402.firebaseapp.com",
  projectId: "flow-wallet-43402",
  storageBucket: "flow-wallet-43402.firebasestorage.app",
  messagingSenderId: "615366618480",
  appId: "1:615366618480:web:c31a284878ef8859e9f3b5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };