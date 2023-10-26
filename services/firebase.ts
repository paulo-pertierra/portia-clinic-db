import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { collection, collectionGroup, getFirestore, where } from 'firebase/firestore';
import { query } from 'firebase/database';

const firebaseConfig = JSON.parse('{"apiKey":"AIzaSyA9q_NY1_VUe8uzDuleU__vKq-zB0lRK8E","authDomain":"fernandez-clinic-dev.firebaseapp.com","projectId": "fernandez-clinic-dev","storageBucket":"fernandez-clinic-dev.appspot.com","messagingSenderId":"920081821723","appId":"1:920081821723:web:db56daab5a10010f86c8be","measurementId":"G-79MET1JWVH"}');
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Root Collection References
export const patientColRef = collection(db, "patient");


export const patientRecordColRefById = (patientId: string) => collection(db, "patient", patientId, "records");

export const recordsRef = collectionGroup(db, "records");