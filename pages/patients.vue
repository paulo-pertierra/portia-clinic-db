<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Patients</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Your Patients</ion-card-title>
          <ion-card-subtitle class="flex items-center">
            <ion-item class="w-full">
              <ion-select class="w-40" label="Sort" label-placement="stacked" v-model="patientSortBy" @ionChange="handleIonSelectChange($event)">
                <ion-select-option value="last_name">Last Name</ion-select-option>
                <ion-select-option value="first_name">First Name</ion-select-option>
                <ion-select-option value="created_at">Date Created</ion-select-option>
                <ion-select-option value="updated_at">Date Updated</ion-select-option>
              </ion-select>
              <ion-searchbar></ion-searchbar>
            </ion-item>
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="patient in patients" class="relative ion-activatable" :ref="patient.id">
              <ion-thumbnail slot="start" @click="goToPatient(patient.id)">
                <img class="rounded-full" alt="" :src="patient.image" />
              </ion-thumbnail>
              <ion-label @click="goToPatient(patient.id)">{{ patient.fullName }} <span class="text-xs block">added {{ 'four years ago' }}</span></ion-label>
              <ion-ripple-effect></ion-ripple-effect>
              <button :id="`patient-${patient.id}-action-sheet`">
                <ion-icon :icon="ioniconsEllipsisVerticalOutline" />
              </button>
              <ion-action-sheet :trigger="`patient-${patient.id}-action-sheet`" header="Actions"
                :buttons="patientActionSheetButtons" @didDismiss="handleActionSheetEvent($event)"></ion-action-sheet>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { UseIonRouterResult } from "~/types";
const ionRouter: UseIonRouterResult = useIonRouter();
const goToPatient = (id: string) => ionRouter.push(`/patient/${id}`);

// Patient Sorter
const patientSortBy = ref("last_name")

function handleIonSelectChange(event: CustomEvent) {
  console.log(event.detail.value);
}

// Options Menu
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

function handleActionSheetEvent(event: Event & { detail: { data: { action: string } } }) {
  if (event.detail.data) {
    console.log(event.detail.data.action);
  }
}

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
