import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { auth, db } from "../Helpers/firebase"

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";


/**
 * Production-ready signup function
 */
export const signUpUser = async ({
  email,
  password,
  userName,
  phone = "",
  role = "user",
  photoURL = "",
}) => {
  try {
    // 1️⃣ Check if username already exists
    const usernameQuery = query(
      collection(db, "users"),
      where("userName", "==", userName)
    );

    const usernameSnapshot = await getDocs(usernameQuery);

    if (!usernameSnapshot.empty) {
      return {
        success: false,
        error: "Username already taken",
      };
    }

    // 2️⃣ Create Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 3️⃣ Update Auth display name
    await updateProfile(user, {
      displayName: userName,
      photoURL,
    });

    // 4️⃣ Create Firestore user document
    const userRef = doc(db, "users", user.uid);

    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      userName,
      phone,
      role: "user",
      photoURL,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isActive: true,
    });

    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// Sign in with email and password
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { success: true, user: userCredential.user }
  } catch (error) {
    console.error("Error signing in:", error)
    let errorMessage = "Failed to sign in"

    switch (error.code) {
      case "auth/invalid-email":
        errorMessage = "Invalid email address"
        break
      case "auth/user-disabled":
        errorMessage = "This account has been disabled"
        break
      case "auth/user-not-found":
        errorMessage = "No account found with this email"
        break
      case "auth/wrong-password":
        errorMessage = "Incorrect password"
        break
      case "auth/invalid-credential":
        errorMessage = "Invalid email or password"
        break
      default:
        errorMessage = error.message
    }

    return { success: false, error: errorMessage }
  }
}

// Sign out
export const logout = async () => {
  try {
    await signOut(auth)
    return { success: true }
  } catch (error) {
    console.error("Error signing out:", error)
    return { success: false, error: error.message }
  }
}

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser
}

// Listen to auth state changes
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback)
}

// Check if user is authenticated
export const isAuthenticated = () => {
  return auth.currentUser !== null
}
