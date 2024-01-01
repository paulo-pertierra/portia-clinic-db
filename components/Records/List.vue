<template>
  <ion-item class="relative ion-activatable" :ref="record.id" @click="goToRecord(record.id)">
    <ion-ripple-effect></ion-ripple-effect>
    <ion-label>
      <h2>{{ useReadableRecordType(record.type) }}</h2>
      <p>{{ record.patient_name }}</p>
      <p>{{ friendlyDate.formatFromTimestamp(record.created_at) }}</p>
    </ion-label>
    <button :id="`record-${record.id}-action-sheet`">
      <ion-icon :icon="ioniconsEllipsisVerticalOutline" />
    </button>
    <ion-action-sheet
      :trigger="`record-${record.id}-action-sheet`"
      header="Actions"
      :buttons="patientActionSheetButtons"
      @didDismiss="handleActionSheetEvent($event, record.id!)"
    ></ion-action-sheet>
  </ion-item>
</template>

<script lang="ts" setup>
import { UseIonRouterResult } from "~/types";
import { Record } from "~/types/record";

function handleActionSheetEvent(event: Event & { detail: { data: { action: string } } }, id: string) {
  if (event.detail.data) {
    console.log(event.detail.data.action);
  }
}

defineProps<{
  record: Record
}>();

const ionRouter: UseIonRouterResult = useIonRouter();

const goToRecord =(id: Record["id"]) => {
  ionRouter.push(`records/${id}`);
}

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

const friendlyDate = useFriendlyDate();
</script>
