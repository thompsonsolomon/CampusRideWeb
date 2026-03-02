import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../Helpers/firebase";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeFirestore = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setFirebaseUser(null);
        setUserProfile(null);
        setLoading(false);
        return;
      }
console.log("Auth state changed, user:", user);      

      setFirebaseUser(user);

      // 🔥 Realtime Firestore listener
      const userRef = doc(db, "users", user.uid);

      unsubscribeFirestore = onSnapshot(
        userRef,
        (snapshot) => {
          if (snapshot.exists()) {
            setUserProfile(snapshot.data());
          } else {
            setUserProfile(null);
          }
          setLoading(false);
        },
        (error) => {
          console.error("Firestore user fetch error:", error);
          setLoading(false);
        }
      );
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeFirestore) unsubscribeFirestore();
    };
  }, []);

  // 🔥 Advanced computed user object
  const getFormattedUser = () => {
    if (!firebaseUser) return null;

    const displayName = firebaseUser.displayName || "";
    const nameParts = displayName.trim().split(" ");

    const firstName = nameParts[0] || "";
    const lastName =
      nameParts.length > 1
        ? nameParts.slice(1).join(" ")
        : "";

    return {
      // 🔐 Auth Info
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      emailVerified: firebaseUser.emailVerified,

      // 👤 Name Breakdown
      displayName,
      firstName,
      lastName,

      // 🗄️ Firestore Profile
      role: userProfile?.role || "user",
      phone: userProfile?.phone || "",
      photoURL:
        userProfile?.photoURL ||
        firebaseUser.photoURL ||
        null,
      createdAt: userProfile?.createdAt || null,
      updatedAt: userProfile?.updatedAt || null,
      isActive: userProfile?.isActive ?? true,

      // ⚙️ Metadata
      providerId:
        firebaseUser.providerData?.[0]?.providerId || null,
    };
  };

  const value = {
    user: getFormattedUser(),
    firebaseUser,
    loading,
    isAuthenticated: !!firebaseUser && !!userProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};