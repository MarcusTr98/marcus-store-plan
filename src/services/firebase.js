import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // Điền tiếp các biến env vào đây nếu dùng
};

let db, auth, currentUser;
const appId = "marcus-store-plan";

export async function initFirebase(onDataSync) {
  if (!firebaseConfig.apiKey) return null;

  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);

    await signInAnonymously(auth);
    currentUser = auth.currentUser;

    const docRef = doc(
      db,
      "artifacts",
      appId,
      "public",
      "data",
      "plan_state",
      "main_doc",
    );
    onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        onDataSync(snapshot.data());
      }
    });
    return true;
  } catch (error) {
    console.error("Firebase Init Error:", error);
    return false;
  }
}

export async function syncStateToFirebase(state) {
  if (db && currentUser) {
    try {
      const docRef = doc(
        db,
        "artifacts",
        appId,
        "public",
        "data",
        "plan_state",
        "main_doc",
      );
      await setDoc(docRef, state, { merge: true });
    } catch (error) {
      console.error("Firebase Write Error:", error);
    }
  }
}
