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
      <h5>Patient Name: {{ patient?.full_name }}</h5>
      <h5>Record Type: {{  }}</h5>
      <ion-item>
        <ion-select label="Record Type" placeholder="Click Here">
          <ion-select-option value="diagnostic-infertility-work-up">Infertility Work Up</ion-select-option>
          <ion-select-option value="request-desirous-of-contraception">Desirous of Contraception</ion-select-option>
          <ion-select-option value="report-abnormal-menstruation">Abnormal Menstruation Report</ion-select-option>
          <ion-select-option value="other-general-remarks">Other</ion-select-option>
        </ion-select>
      </ion-item>
      </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { _RefFirestore } from 'vuefire';
import { patientDocRefById } from '~/services/firebase';
import { Patient } from '~/types/patient';
const route = useRoute();

const patient = useDocument<Patient>(patientDocRefById(route.query.id as string));
</script> 