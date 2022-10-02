import AsyncStorage from "@react-native-async-storage/async-storage";
import type { FirebaseOptions } from "firebase/app";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} from "@env";

const firebaseConfig: FirebaseOptions = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

if (getApps().length < 1) {
    const app = initializeApp(firebaseConfig);

    initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
}

const auth = getAuth();
const db = getFirestore();

export { auth, db };
