<template>
  <ion-item class="relative ion-activatable" :ref="patient.id">
    <ion-thumbnail slot="start" @click="goToPatient(patient.id)">
      <img class="rounded-full" alt="" :src="patient.image" />
    </ion-thumbnail>
    <ion-label @click="goToPatient(patient.id)">{{ patient.fullName }}
      <span class="text-xs block">added {{ "four years ago" }}</span></ion-label>
    <ion-ripple-effect></ion-ripple-effect>
    <button :id="`patient-${patient.id}-action-sheet`">
      <ion-icon :icon="ioniconsEllipsisVerticalOutline" />
    </button>
    <ion-action-sheet :trigger="`patient-${patient.id}-action-sheet`" header="Actions"
      :buttons="patientActionSheetButtons" @didDismiss="handleActionSheetEvent($event)"></ion-action-sheet>
  </ion-item>
</template>

<script lang="ts" setup>

defineProps<{
  patient: {
    id: string,
    lastName: string,
    firstName: string,
    middleName: string,
    fullName: string,
    image: string,
  }
}>();

import { UseIonRouterResult } from "~/types";
const ionRouter: UseIonRouterResult = useIonRouter();
const goToPatient = (id: string) => ionRouter.push(`/patient/${id}`);

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