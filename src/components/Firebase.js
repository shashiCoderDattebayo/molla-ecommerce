import React, { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, update } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile, signInAnonymously, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHeejRBZa7afv2hlf8250q7iz874UFFro",
  authDomain: "shop-8b88e.firebaseapp.com",
  databaseURL: "https://shop-8b88e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-8b88e",
  storageBucket: "shop-8b88e.appspot.com",
  messagingSenderId: "940500852091",
  appId: "1:940500852091:web:13d25a31c8d762d8fdb1de",
  measurementId: "G-ESD5F03C8V",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Create User Context
const UserContext = createContext();

// User Provider Component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

const GetPrevUserData = async () => {
  try {
    const dbRef = ref(db);
    const data = await get(child(dbRef, `users/${auth.currentUser.uid}`));
    return {
      cart: data.val()?.cart || [],
      wishlist: data.val()?.wishlist || [],
    };
  } catch (error) {
    console.error("Error getting previous user data:", error);
    return { cart: [], wishlist: [] };
  }
}

const signInWithGoogle = async () => {
  try {
    const prevUserData = await GetPrevUserData();
    const signInLogin = await signInWithPopup(auth, provider)
    await update(ref(db, `users/${auth.currentUser.uid}`), {
      uid: signInLogin.user.uid,
      displayName: signInLogin.user.displayName,
      ...prevUserData
    });
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

const registerWithUserAndPassword = async (inputs) => {
  try {
    const prevUserData = await GetPrevUserData();
    await createUserWithEmailAndPassword(auth, inputs.email, inputs.password);
    await updateProfile(auth.currentUser, {
      displayName: inputs.userName
    })
    await update(ref(db, `users/${auth.currentUser.uid}`), {
      uid: auth.currentUser.uid,
      displayName: inputs.userName,
      ...prevUserData
    })
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

const LoginWithEmailAndPassword = async (inputs) => {
  try {
    await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

const AnonymouslySignIn = async () => {
  try {
    await signInAnonymously(auth)
    await update(ref(db, `users/${auth.currentUser.uid}`), {
      uid: auth.currentUser.uid,
    });
  } catch (error) {
    console.error("Error signing in anonymously:", error);
  }
};

const GetUserWishList = async (setWishList) => {
  try {
    const dbRef = ref(db);
    const data = await get(child(dbRef, `users/${auth.currentUser.uid}/wishlist`));
    const wishlist = data.exists() ? data.val() : [];
    if (setWishList) setWishList(wishlist);
    return wishlist;
  } catch (error) {
    console.error("Error getting wishlist:", error);
    return [];
  }
}

const AddToWishList = async (wishListArray) => {
  try {
    await update(ref(db, `users/${auth.currentUser.uid}`), {
      "wishlist": wishListArray
    })
  } catch (error) {
    console.error("Error updating wishlist:", error);
  }
}

const GetUserCart = async (setCartList) => {
  try {
    const dbRef = ref(db);
    const data = await get(child(dbRef, `users/${auth.currentUser.uid}/cart`));
    const cart = data.exists() ? data.val() : [];
    if (setCartList) setCartList(cart);
    return cart;
  } catch (error) {
    console.error("Error getting cart:", error);
    return [];
  }
}

const AddToCartList = async (cartListArray) => {
  try {
    await update(ref(db, `users/${auth.currentUser.uid}`), {
      "cart": cartListArray
    })
  } catch (error) {
    console.error("Error updating cart:", error);
  }
}

export { db, auth, signInWithGoogle, registerWithUserAndPassword, LoginWithEmailAndPassword, AnonymouslySignIn, GetUserWishList, AddToWishList, GetUserCart, AddToCartList, UserContext, UserProvider }