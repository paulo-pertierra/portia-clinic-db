import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, collectionGroup, doc, getFirestore, orderBy, where } from "firebase/firestore";
import { query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9q_NY1_VUe8uzDuleU__vKq-zB0lRK8E",
  authDomain: "fernandez-clinic-dev.firebaseapp.com",
  projectId: "fernandez-clinic-dev",
  storageBucket: "fernandez-clinic-dev.appspot.com",
  messagingSenderId: "920081821723",
  appId: "1:920081821723:web:db56daab5a10010f86c8be",
  measurementId: "G-79MET1JWVH",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const analytics = getAnalytics(app);

/**
 * COLLECTION REFERENCES
 */
export const patientColRef = collection(db, "patient");
export const recordColRef = collection(db, "record");

/**
 * QUERY REFERENCES
 */

export const patientRecordQueryRef = (patientId: string) =>
  query(
    recordColRef,
    where("patient_id", "==", patientId)
  );

export const orderedByDatePatientQueryRef = (direction: "asc" | "desc" = "desc") => 
  query(
    patientColRef,
    orderBy("created_at", direction)
  );

export const orderedByDateRecordQueryRef = (direction: "asc" | "desc" = "desc") =>
  query(
    recordColRef,
    orderBy("created_at", direction)
  )
/**
 * DOCUMENT REFERENCES  
 */
export const patientDocRef = (id: string) => doc(db, "patient", id);
export const recordDocRef = (id: string) => doc(db, "record", id);