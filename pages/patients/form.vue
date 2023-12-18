<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Patient Information Form</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Personal Information</h1>

      <h5>Name</h5>
      <ion-item>
        <ion-input
          v-model="patientDraft.first_name"
          label="First Name"
          placeholder="Enter first name"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          v-model="patientDraft.middle_name"
          label="Middle Name"
          placeholder="Enter middle name"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          v-model="patientDraft.last_name"
          label="Last Name"
          placeholder="Enter last name"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-select v-model="patientDraft.sex" label="Sex" value="female" class="w-fit">
          <ion-select-option value="male">Male</ion-select-option>
          <ion-select-option value="female">Female</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-accordion-group>
        <ion-accordion value="birthday-datetime-picker">
          <ion-item slot="header">
            <ion-label
              >Birth Day:
              {{
                patientDraft.date_of_birth
                  ? $dayjs(patientDraft.date_of_birth as unknown as string).format("MMM DD, YYYY")
                  : "No birthday set"
              }}</ion-label
            >
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-datetime class="w-full" presentation="date" v-model="patientDraft.date_of_birth" />
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <h5>Contact Information</h5>
      <ion-item>
        <ion-input
          v-model="patientDraft.email_address"
          label="Email"
          placeholder="Enter email address"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          v-model="patientDraft.contact_number"
          label="Phone Number"
          placeholder="09** *** ****"
        ></ion-input>
      </ion-item>

      <h5>Other Information</h5>
      <ion-item>
        <ion-input v-model="patientDraft.address" label="Address" placeholder="Enter address"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          v-model="patientDraft.occupation"
          label="Occupation"
          placeholder="Enter occupation"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="patientDraft.religion" label="Religion" placeholder="Enter religion"></ion-input>
      </ion-item>

      <h5>Marital/Partner Information</h5>
      <ion-item>
        <ion-select v-model="patientDraft.civil_status" label="Civil Status" value="single" class="w-fit">
          <ion-select-option value="single">Single</ion-select-option>
          <ion-select-option value="married">Married</ion-select-option>
          <ion-select-option value="widowed">Widowed</ion-select-option>
          <ion-select-option value="legally-separated">Legally Separated</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-input
          v-model="patientDraft.spouse_age"
          label="Age of Spouse"
          type="number"
          placeholder="Enter age"
        ></ion-input>
      </ion-item>
      <ion-accordion-group>
        <ion-accordion value="marriage-datetime-picker">
          <ion-item slot="header">
            <ion-label
              >Date of Marriage:
              {{
                patientDraft.date_of_marriage
                  ? $dayjs(patientDraft.date_of_marriage).format("MMM DD, YYYY")
                  : "No date set"
              }}</ion-label
            >
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-datetime class="w-full" presentation="date" v-model="patientDraft.date_of_marriage" />
          </div>
        </ion-accordion>
      </ion-accordion-group>
      <ion-item>
        <ion-input
          v-model="patientDraft.spouse_occupation"
          label="Partner's Occupation"
          placeholder="Enter occupation"
        ></ion-input>
      </ion-item>

      <h5>Medical Histories</h5>
      <ion-accordion-group>
        <ion-accordion value="patient-medical-history">
          <ion-item slot="header" color="light">
            <ion-label>Patient's Medical History</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-checkbox
              v-model="patientDraft.medical_history.allergy"
              class="block w-fit py-2"
              label-placement="end"
              >Allergy</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.blood_disease"
              class="block w-fit py-2"
              label-placement="end"
              >Blood Disease</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.convulsion"
              class="block w-fit py-2"
              label-placement="end"
              >Convulsion</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.cyst"
              class="block w-fit py-2"
              label-placement="end"
              >Cyst</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.diabetes"
              class="block w-fit py-2"
              label-placement="end"
              >Diabetes</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.goiter"
              class="block w-fit py-2"
              label-placement="end"
              >Goiter</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.heart_disease"
              class="block w-fit py-2"
              label-placement="end"
              >Heart Disease</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.hypertension"
              class="block w-fit py-2"
              label-placement="end"
              >Hypertension</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.lung_disease"
              class="block w-fit py-2"
              label-placement="end"
              >Lung Disease</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.myoma"
              class="block w-fit py-2"
              label-placement="end"
              >Myoma</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.pre_eclampsia"
              class="block w-fit py-2"
              label-placement="end"
              >Pre-eclampsia</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.medical_history.uti"
              class="block w-fit py-2"
              label-placement="end"
              >UTI</ion-checkbox
            >
          </div>
        </ion-accordion>
        <ion-accordion value="family-medical-history">
          <ion-item slot="header" color="light">
            <ion-label>Family's Medical History</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-checkbox
              v-model="patientDraft.family_history.allergy"
              class="block w-fit py-2"
              label-placement="end"
              >Allergy</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.asthma"
              class="block w-fit py-2"
              label-placement="end"
              >Asthma</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.blood_disease"
              class="block w-fit py-2"
              label-placement="end"
              >Blood Disease</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.cancer"
              class="block w-fit py-2"
              label-placement="end"
              >Cancer</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.cleft_lip"
              class="block w-fit py-2"
              label-placement="end"
              >Cleft Lip</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.cyst"
              class="block w-fit py-2"
              label-placement="end"
              >Cyst</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.diabetes"
              class="block w-fit py-2"
              label-placement="end"
              >Diabetes</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.epilepsy"
              class="block w-fit py-2"
              label-placement="end"
              >Epilepsy</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.goiter"
              class="block w-fit py-2"
              label-placement="end"
              >Goiter</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.heart_disease"
              class="block w-fit py-2"
              label-placement="end"
              >Heart Disease</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.hyper_tension"
              class="block w-fit py-2"
              label-placement="end"
              >Hypertension</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.lung_disease"
              class="block w-fit py-2"
              label-placement="end"
              >Lung Disease</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.mentally_retarded"
              class="block w-fit py-2"
              label-placement="end"
              >Mentally Retarded</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.myoma"
              class="block w-fit py-2"
              label-placement="end"
              >Myoma</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.pre_eclampsia"
              class="block w-fit py-2"
              label-placement="end"
              >Pre-eclampsia</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.twins"
              class="block w-fit py-2"
              label-placement="end"
              >Twins</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.family_history.uti"
              class="block w-fit py-2"
              label-placement="end"
              >UTI</ion-checkbox
            >
          </div>
        </ion-accordion>
        <ion-accordion value="environmental-history">
          <ion-item slot="header" color="light">
            <ion-label>Environmental Histories</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-checkbox
              v-model="patientDraft.environment_history.alcohol"
              class="block w-fit py-2"
              label-placement="end"
              >Alcohol</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.environment_history.cigarette"
              class="block w-fit py-2"
              label-placement="end"
              >Cigarette</ion-checkbox
            >
            <ion-checkbox
              v-model="patientDraft.environment_history.drugs"
              class="block w-fit py-2"
              label-placement="end"
              >Drugs</ion-checkbox
            >
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <h5>Remarks</h5>
      <ion-item>
        <ion-textarea v-model="patientDraft.remarks" placeholder="Enter additional information" />
      </ion-item>

      <div v-if="!patientId">
        <h5>Purpose of Visit</h5>
        <ion-item>
          <ion-select label="Record Type" value="female" class="w-fit">
            <ion-select-option value="desirous-of-contraceptive">Desirous of Contraceptive</ion-select-option>
            <ion-select-option value="abnormal-menstruation">Abnormal Menstruation</ion-select-option>
            <ion-select-option value="infertility-workup">Infertility Workup</ion-select-option>
            <ion-select-option value="other">Other</ion-select-option>
          </ion-select>
        </ion-item>
      </div>

      <ion-button class="w-full py-8" size="medium" @click="submitPatientForm"
        >{{ patientId ? "Edit" : "Add" }} Patient
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"; // Lesson learned, always import this when you want to update route, so the older instance will be refreshed. Time waster.
import { Timestamp, addDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import { db, patientColRef, patientDocRefById } from "~/services/firebase";
import type { Patient } from "~/types/patient";

const patientDraft: Ref<Patient> = ref({
  sex: "female",
  environment_history: {},
  family_history: {},
  medical_history: {},
});
const route = useRoute();
const patientId = computed(() => route.query.id as string);

onIonViewWillEnter(async () => {
  resetPatientForm();
  const data = await getPatientDocument();
  if (data) autoFillPatientForm(data);
});

const resetPatientForm = () => {
  patientDraft.value = {
    sex: "female",
    environment_history: {},
    family_history: {},
    medical_history: {},
  };
};

const getPatientDocument = async () => {
  if (!patientId.value) return;
  const { data, promise } = useDocument(patientDocRefById(patientId.value));
  await promise.value;
  return data;
};

const autoFillPatientForm = (data: globalThis.Ref) => {
  patientDraft.value = {
    ...data.value,
    id: data.value.id,
    date_of_birth: (data.value.date_of_marriage as Timestamp)
      ? (data.value.date_of_birth as Timestamp).toDate().toISOString()
      : "",
    date_of_marriage: (data.value.date_of_marriage as Timestamp)
      ? (data.value.date_of_marriage as Timestamp).toDate().toISOString()
      : "",
  };
};

const updatePatientDocument = async () => {
  const { id, ...rest } = patientDraft.value;
  const updatedPatientDoc = {
    ...rest,
    updated_at: Timestamp.fromDate(new Date()),
    date_of_birth: patientDraft.value.date_of_birth
      ? Timestamp.fromDate(new Date(patientDraft.value.date_of_birth as unknown as string))
      : "",
    date_of_marriage: patientDraft.value.date_of_marriage
      ? Timestamp.fromDate(new Date(patientDraft.value.date_of_marriage))
      : "",
  };
  console.log(patientId.value);
  await updateDoc(patientDocRefById(patientId.value), updatedPatientDoc).then(() => {});
  navigateTo(`/patients/${patientId.value}`);
};

const createPatientDocument = () => {
  const newPatientDoc = {
    ...patientDraft.value,
    full_name:
      patientDraft.value.first_name +
      " " +
      patientDraft.value.middle_name +
      " " +
      patientDraft.value.last_name,
    created_at: Timestamp.fromDate(new Date()),
    date_of_birth: patientDraft.value.date_of_birth
      ? Timestamp.fromDate(new Date(patientDraft.value.date_of_birth as unknown as string))
      : "",
    date_of_marriage: patientDraft.value.date_of_marriage
      ? Timestamp.fromDate(new Date(patientDraft.value.date_of_marriage as unknown as string))
      : "",
  };
  addDoc(patientColRef, newPatientDoc).then((data) => {
    navigateTo(`/patients/${data.id}`);
  });
};

const submitPatientForm = () => {
  if (patientId.value) {
    updatePatientDocument();
  }
  if (!patientId.value) createPatientDocument();
};
</script>
