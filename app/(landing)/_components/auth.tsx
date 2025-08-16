// _components/auth.tsx
"use client";

import { useState } from "react";
import { auth, db} from "@/lib/firebase/firebase-config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { GoogleAuthProvider,signInWithPopup, signInAnonymously } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function Auth() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const saveUserToFirestore = async (user: any) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email || null,
        displayName: user.displayName || "Guest",
        photoURL: user.photoURL || null,
        createdAt: serverTimestamp(),
      }, { merge: true });
    } catch (err) {
      alert("Error saving user: " + err);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await saveUserToFirestore(result.user);
      alert("✅ Google Sign-in successful!");
      router.push("/");
    } catch (error: any) {
      alert("❌ Google Sign-in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInAnonymously(auth);
      await saveUserToFirestore(result.user);
      alert("✅ Guest Sign-in successful!");
      router.push("/");
    } catch (error: any) {
      alert("❌ Guest Sign-in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>

      <button
        onClick={handleAnonymousSignIn}
        disabled={loading}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Continue as Guest
      </button>
    </div>
  );
}