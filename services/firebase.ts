import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, collectionGroup, doc, getFirestore, where } from "firebase/firestore";
import { query } from "firebase/firestore";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Collection and collection group references
/**
 * Ito ang collection ng mga patients, pwedeng tawagin sa loob ng useCollection();
 */
export const patientColRef = collection(db, "patient");
/**
 * Ito rin sa mga records, pero collectionGroup ito, kaya mag-ingat sa paggamit. Usable din sa useCollection();
 * Nested collection ng bawat patient.
 */
export const recordsColGrpRef = collectionGroup(db, "records");

/**
 * Queries Records of patients by their IDs.
 * @param patientId ID ng patient, inject mo sa patient.id
 */
export const patientRecordColRefByPatientId = (patientId: string) =>
  collection(db, "patient", patientId, "records");

/**
 *
 * @param patientId ID ng patient, inject mo sa patient.id
 * @param type "desirous_of_contraception", "abnormal_menstruation", "general_remarks", "infertility_workup"
 */
export const patientRecordColRefByPatientIdAndType = (patientId: string, type: string) =>
  query(patientRecordColRefByPatientId(patientId), where("type", "==", type));

export const patientDocRefById = (id: string) => doc(db, "patient", id);

