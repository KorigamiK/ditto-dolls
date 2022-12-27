import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc } from "firebase/firestore";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { getAuth as firebaseGetAuth } from "firebase/auth";
import { Review, User, UserData } from "./schema";
import "firebase/firestore";

const clientCredentials = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function assignTypes<T extends object>() {
	return {
		toFirestore(doc: T): DocumentData {
			return doc;
		},
		fromFirestore(snapshot: QueryDocumentSnapshot): T {
			return snapshot.data()! as T;
		},
	};
}

export const app = initializeApp(clientCredentials);
export const db = getFirestore(app);
export const getAuth = () => firebaseGetAuth(app);
export const getUserDataDoc = (uid: string) => doc(db, 'userData', uid)

export const reviewsCollection = collection(db, "reviews").withConverter(
	assignTypes<Review>()
);
export const userCollection = collection(db, "users").withConverter(
	assignTypes<User>()
);

export { getDoc, getDocs } from "firebase/firestore";

export {
	signInWithPopup,
	GoogleAuthProvider,
	signInWithRedirect,
	getRedirectResult,
} from "firebase/auth";
