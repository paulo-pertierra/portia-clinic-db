<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Documents</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Your Patients</ion-card-title>
          <ion-card-subtitle>
            <ion-searchbar></ion-searchbar>
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="patient in patients" class="relative ion-activatable" :ref="patient.id">
              <ion-thumbnail slot="start" @click="goToPatient(patient.id)">
                <img class="rounded-full" alt="" :src="patient.image" />
              </ion-thumbnail>
              <ion-label @click="goToPatient(patient.id)">{{ patient.fullName }}</ion-label>
              <ion-ripple-effect></ion-ripple-effect>
              <button :id="`patient-${patient.id}-action-sheet`">
                <ion-icon :icon="ioniconsEllipsisVerticalOutline" />
              </button>
              <ion-action-sheet
                :trigger="`patient-${patient.id}-action-sheet`"
                header="Actions"
                :buttons="patientActionSheetButtons"
                @didDismiss="handleActionSheetEvent($event)"
              ></ion-action-sheet>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { UseIonRouterResult } from "~/types";

function handleActionSheetEvent(event: Event & { detail: { data: { action: string } } }) {
  if (event.detail.data) {
    console.log(event.detail.data.action);
  }
}

const ionRouter: UseIonRouterResult = useIonRouter();
const goToPatient = (id: string) => ionRouter.push(`/patients/${id}`);

const patientActionSheetButtons = [
  {
    text: "Edit",
    data: {
      action: "edit",
    },
  },
  {
    text: "Share",
    data: {
      action: "share",
    },
  },
  {
    text: "Delete",
    role: "destructive",
    data: {
      action: "delete",
    },
  },
  {
    text: "Cancel",
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];

const patients = [
  {
    id: "12345",
    lastName: "Flint",
    firstName: "Maria",
    middleName: "Bonnington",
    fullName: "Flint, Maria Bonnington",
    image: "https://i.pravatar.cc/300?img=36",
  },
  {
    id: "12347",
    lastName: "Morrison",
    firstName: "Chandre",
    middleName: "Lee",
    fullName: "Morrison, Chandre Lee",
    image: "https://i.pravatar.cc/300?img=45",
  },
];
</script>
