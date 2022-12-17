import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const app = initializeApp({ projectId: "next-auth-test" });
const firestore = getFirestore(app);

// https://next-auth.js.org/configuration/options
export default NextAuth({
    // https://next-auth.js.org/configuration/providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    adapter: FirestoreAdapter(firestore),
})