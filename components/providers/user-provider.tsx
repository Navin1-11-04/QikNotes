"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, db } from "@/lib/firebase/firebase-config";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface UserData {
  uid: string;
  displayName?: string;
  photoURL?: string | null;
  email?: string | null;
  isAnonymous: boolean;
}

interface UserContextType {
  user: UserData | null;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({ user: null, loading: true });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        let userData: UserData = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || "Guest",
          photoURL: firebaseUser.photoURL || null,
          email: firebaseUser.email || null,
          isAnonymous: firebaseUser.isAnonymous,
        };

        // Only fetch Firestore data if user is not anonymous
        if (!firebaseUser.isAnonymous) {
          const docRef = doc(db, "users", firebaseUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            userData = { ...userData, ...(docSnap.data() as Omit<UserData, "uid">) };
          }
        }

        setUser(userData);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
