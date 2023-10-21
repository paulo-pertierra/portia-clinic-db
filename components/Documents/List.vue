<template>
  <ion-item class="relative ion-activatable" :ref="patient.id">
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
</template>

<script lang="ts" setup>
import { UseIonRouterResult } from "~/types";

function handleActionSheetEvent(event: Event & { detail: { data: { action: string } } }) {
  if (event.detail.data) {
    console.log(event.detail.data.action);
  }
}

defineProps<{
  patient: {
    id: string;
    lastName: string;
    firstName: string;
    middleName: string;
    fullName: string;
    image: string;
  };
}>();

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
</script>
