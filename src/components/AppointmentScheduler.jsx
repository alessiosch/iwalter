import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format, addMinutes, isBefore } from "date-fns";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5VH6S1cdOjAyJAHucBb-YvcmlWZlCgSU",
  authDomain: "iwalter.firebaseapp.com",
  projectId: "iwalter",
  storageBucket: "iwalter.firebasestorage.app",
  messagingSenderId: "801990555301",
  appId: "1:801990555301:web:cc3ff89560a7045edc3f4c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ... rest of the component (see canvas content)
export default AppointmentScheduler;