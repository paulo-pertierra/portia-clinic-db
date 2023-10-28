<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Patient Data</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <div class="w-full py-4">
          <img class="w-36 h-36 aspect-square mx-auto rounded-full" src="https://placehold.co/500" alt="" />
        </div>
        <ion-card-header>
          <ion-card-title class="text-center">{{ patient?.first_name + " " + patient?.middle_name?.charAt(0) + ". " + patient?.last_name }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <p>Contact number: {{ patient?.contact_number}}</p>
          <p>Address: {{ patient?.address }}</p>
          <p>Sex: {{ patient?.sex }} | Age: {{ patient?.date_of_birth ? $dayjs(new Date()).diff(patient.date_of_birth.toDate(), "year") : "No age data" }}</p>
          <p class="pt-4">Status: added {{ friendlyDate.formatFromTimestamp(patient?.created_at) }}, updated {{ friendlyDate.formatFromTimestamp(patient?.updated_at) }}</p>
        </ion-card-content>
      </ion-card>
      <ion-segment v-model="patientSegment">
        <ion-segment-button value="personal">
          <ion-label>Personal</ion-label>
        </ion-segment-button>
        <ion-segment-button value="documents">
          <ion-label>Documents</ion-label>
        </ion-segment-button>
      </ion-segment>
      <div class="w-full" v-if="patientSegment === 'personal'">Personal Info</div>
      <div class="w-full" v-else>
        <ion-card v-for="i in 10">
          <ion-card-header>
            <ion-card-title>Desirous of Contraceptive</ion-card-title>
            <ion-card-subtitle>{{ "4:00pm Tuesday, January 20, 2023" }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content> Click on the card to view more details. </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
const patientSegment = ref("personal");

import { useRoute } from "vue-router";
import { _RefFirestore } from "vuefire";
import { patientDocRefById } from "~/services/firebase";
import { Patient } from "~/types/patient";
const route = useRoute();

const patient: _RefFirestore<Patient | undefined> = useDocument(patientDocRefById(route.params.id as string));
const friendlyDate = useFriendlyDate();
</script>
