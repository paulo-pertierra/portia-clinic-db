<template>
  <ion-item class="relative ion-activatable" :ref="patient.id">
    <ion-thumbnail slot="start" @click="goToPatient(patient.id!)">
      <img class="rounded-full" alt="" :src="'https://placehold.co/50'" />
    </ion-thumbnail>
    <ion-label @click="goToPatient(patient.id!)"
      >{{ getFullName(patient.first_name!, patient.last_name!) }}
      <span class="text-xs block"
        >added {{ friendlyDate.formatFromTimestamp(patient.created_at!) }}</span
      ></ion-label
    >
    <ion-ripple-effect></ion-ripple-effect>
    <button :id="`patient-${patient.id}-action-sheet`">
      <ion-icon :icon="ioniconsEllipsisVerticalOutline" />
    </button>
    <ion-action-sheet
      :trigger="`patient-${patient.id}-action-sheet`"
      header="Actions"
      :buttons="patientActionSheetButtons"
      @didDismiss="handleActionSheetEvent($event, patient.id!)"
    ></ion-action-sheet>
  </ion-item>
  <ion-modal> </ion-modal>
</template>

<script lang="ts" setup>
defineProps<{
  patient: Patient;
}>();

import { deleteDoc } from "firebase/firestore";
import { useFriendlyDate } from "~/composables/useFriendlyDate";
import { patientDocRefById } from "~/services/firebase";
import { UseIonRouterResult } from "~/types";
import { Patient } from "~/types/patient";

const ionRouter: UseIonRouterResult = useIonRouter();
const goToPatient = (id: string) => ionRouter.push(`/patients/${id}`);

const getFullName = (firstName: string, lastName: string) => firstName + " " + lastName;

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

async function handleActionSheetEvent(event: Event & { detail: { data: { action: string } } }, id: string) {
  if (!event.detail.data) return;
  if (event.detail.data.action === "edit") {
    navigateTo({
      path: "/patients/form",
      query: {
        id,
      },
    });
  }
  if (event.detail.data.action === "delete") {
    await deleteDoc(patientDocRefById(id));
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

const friendlyDate = useFriendlyDate();
</script>
