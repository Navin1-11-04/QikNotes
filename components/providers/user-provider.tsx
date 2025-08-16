"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase/firebase-config";

const UserContext = createContext<{ uid: string | null }>({ uid: null });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUid(user?.uid || null));
    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={{ uid }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
