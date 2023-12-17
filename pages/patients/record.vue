<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Add Record</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h5>Record: {{ patient?.full_name }} | {{ recordTypeReadable }}</h5>
      <ion-item>
        <ion-select v-model="recordType" label="Record Type" placeholder="Click Here">
          <ion-select-option value="diagnostic-infertility-work-up">Infertility Work Up</ion-select-option>
          <ion-select-option value="request-desirous-of-contraception">Desirous of Contraception</ion-select-option>
          <ion-select-option value="report-abnormal-menstruation">Abnormal Menstruation Report</ion-select-option>
          <ion-select-option value="other-general-remarks">Other</ion-select-option>
        </ion-select>
      </ion-item>
      <div v-if="recordType" class="flex">
        <ion-item class="w-full">
          <ion-input 
            v-model="recordDraft.physical!.blood_pressure" 
            label="Blood Pressure"
            placeholder="120/80"  
          />
        </ion-item>
        <ion-item class="w-full">
          <ion-input 
            v-model="recordDraft.physical!.weight" 
            label="Weight (kg)"
            placeholder="50"  
          />
        </ion-item>
      </div>
      <div v-if="recordType === 'diagnostic-infertility-work-up'">
        <h5>Infertility Work Up Details</h5>
        <ion-item>
          
        </ion-item>
      </div>
      </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { Timestamp } from 'firebase/firestore';
import { _RefFirestore } from 'vuefire';
import { patientDocRefById } from '~/services/firebase';
import { Patient } from '~/types/patient';
import { Record, RecordType } from '~/types/record';
const route = useRoute();

const patient = useDocument<Patient>(patientDocRefById(route.query.id as string));

const recordType: Ref<RecordType> = ref("")
const initialRecordDraftState = {
  type: recordType.value,
  created_at: Timestamp.fromDate(new Date()),
  physical: {
    blood_pressure: ""
  }
}
const recordDraft: Ref<Record> = ref(initialRecordDraftState);

const recordTypeReadable = computed(() => {
  if (recordType.value === "diagnostic-infertility-work-up") return "Infertility Work Up"
  if (recordType.value === "other-general-remarks") return "General Remarks"
  if (recordType.value === "report-abnormal-menstruation") return "Abnormal Menstruation"
  if (recordType.value === "request-desirous-of-contraception") return "Desirous of Contraception"
})

watch(recordType, () => {
  recordDraft.value = initialRecordDraftState;
})
</script> 