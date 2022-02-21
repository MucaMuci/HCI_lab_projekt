import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const clientCredentials = {
    apiKey: "AIzaSyAUNEOSArTfJwL-TaR0rf9TB8HYYXjcINw",
    authDomain: "test1-604bd.firebaseapp.com",
    projectId: "test1-604bd",
    storageBucket: "test1-604bd.appspot.com",
    messagingSenderId: "451663705159",
    appId: "1:451663705159:web:e673f29decb2dc83222d6",
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }

}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);



export { initFirebase, db, };