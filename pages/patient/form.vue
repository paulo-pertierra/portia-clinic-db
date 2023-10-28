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
        <ion-input v-model="patientDraft.last_name" label="Last Name" placeholder="Enter last name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="patientDraft.first_name" label="First Name" placeholder="Enter first name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="patientDraft.middle_name" label="Middle Name" placeholder="Enter middle name"></ion-input>
      </ion-item>

      <ion-item>
        <ion-select v-model="patientDraft.sex" label="Sex" value="female" class="w-fit">
          <ion-select-option value="male">Male</ion-select-option>
          <ion-select-option value="female">Female</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <p class="pr-4">Birth Day</p>
        <ion-datetime-button datetime="datetime" />
      </ion-item>

      <h5>Contact Information</h5>
      <ion-item>
        <ion-input label="Email" placeholder="Enter email address"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Phone Number" placeholder="09** *** ****"></ion-input>
      </ion-item>

      <h5>Other Information</h5>
      <ion-item>
        <ion-input label="Address" placeholder="Enter address"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Occupation" placeholder="Enter occupation"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Religion" placeholder="Enter religion"></ion-input>
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
        <ion-input label="Age of Spouse" type="number" placeholder="Enter age"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Years of Marriage" type="number" placeholder="Enter years of marriage"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Occupation of Spouse" placeholder="Enter occupation"></ion-input>
      </ion-item>

      <h5>Medical Histories</h5>
      <ion-accordion-group>
        <ion-accordion value="patient-medical-history">
          <ion-item slot="header" color="light">
            <ion-label>Patient's Medical History</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-checkbox v-model="patientDraft.medical_history_allergy" class="block w-fit py-2" label-placement="end">Allergy</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_blood_disease" class="block w-fit py-2" label-placement="end">Blood Disease</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_convulsion" class="block w-fit py-2" label-placement="end">Convulsion</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_cyst" class="block w-fit py-2" label-placement="end">Cyst</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_diabetes" class="block w-fit py-2" label-placement="end">Diabetes</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_goiter" class="block w-fit py-2" label-placement="end">Goiter</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_heart_disease" class="block w-fit py-2" label-placement="end">Heart Disease</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_hypertension" class="block w-fit py-2" label-placement="end">Hypertension</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_lung_disease" class="block w-fit py-2" label-placement="end">Lung Disease</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_myoma" class="block w-fit py-2" label-placement="end">Myoma</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_pre_eclampsia" class="block w-fit py-2" label-placement="end">Pre-eclampsia</ion-checkbox>
            <ion-checkbox v-model="patientDraft.medical_history_uti" class="block w-fit py-2" label-placement="end">UTI</ion-checkbox>
          </div>
        </ion-accordion>
        <ion-accordion value="family-medical-history">
          <ion-item slot="header" color="light">
            <ion-label>Family's Medical History</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-checkbox v-model="patientDraft.family_history_allergy" class="block w-fit py-2" label-placement="end">Allergy</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_asthma" class="block w-fit py-2" label-placement="end">Asthma</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_blood_disease" class="block w-fit py-2" label-placement="end">Blood Disease</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_cancer" class="block w-fit py-2" label-placement="end">Cancer</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_cleft_lip" class="block w-fit py-2" label-placement="end">Cleft Lip</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_cyst" class="block w-fit py-2" label-placement="end">Cyst</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_diabetes" class="block w-fit py-2" label-placement="end">Diabetes</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_epilepsy" class="block w-fit py-2" label-placement="end">Epilepsy</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_goiter" class="block w-fit py-2" label-placement="end">Goiter</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_heart_disease" class="block w-fit py-2" label-placement="end">Heart Disease</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_hyper_tension" class="block w-fit py-2" label-placement="end">Hypertension</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_lung_disease" class="block w-fit py-2" label-placement="end">Lung Disease</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_mentally_retarded" class="block w-fit py-2" label-placement="end">Mentally Retarded</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_myoma" class="block w-fit py-2" label-placement="end">Myoma</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_pre_eclampsia" class="block w-fit py-2" label-placement="end">Pre-eclampsia</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_twins" class="block w-fit py-2" label-placement="end">Twins</ion-checkbox>
            <ion-checkbox v-model="patientDraft.family_history_uti" class="block w-fit py-2" label-placement="end">UTI</ion-checkbox>
          </div>
        </ion-accordion>
        <ion-accordion value="environmental-history">
          <ion-item slot="header" color="light">
            <ion-label>Environmental Histories</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-checkbox v-model="patientDraft.personal_social_env_history_alcohol" class="block w-fit py-2" label-placement="end">Alcohol</ion-checkbox>
            <ion-checkbox v-model="patientDraft.personal_social_env_history_cigarette" class="block w-fit py-2" label-placement="end">Cigarette</ion-checkbox>
            <ion-checkbox v-model="patientDraft.personal_social_env_history_drugs" class="block w-fit py-2" label-placement="end">Drugs</ion-checkbox>
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <ion-button class="w-full py-8" size="medium">Add Patient</ion-button>
    </ion-content>

    <ion-modal id="birthday-modal" :keep-contents-mounted="true">
      <ion-datetime v-model="patientDraft.date_of_birth" id="datetime" presentation="date"></ion-datetime>
    </ion-modal>
  </ion-page>
</template>

<script lang="ts" setup>
import type { Patient } from "~/types/patient"
const patientDraft: Ref<Patient> = ref({
  last_name: "",
  first_name: "",
  middle_name: "",
  sex: ""
})

watch(patientDraft.value, () => {
  console.log(patientDraft.value)
})
</script>