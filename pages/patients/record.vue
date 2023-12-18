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
      <h3>Record: {{ patient?.full_name }}</h3>
      <h5>{{ recordTypeReadable }}</h5>
      <ion-item>
        <ion-select v-model="recordType" label="Record Type" placeholder="Click Here">
          <ion-select-option value="diagnostic-infertility-work-up">Infertility Work Up</ion-select-option>
          <ion-select-option value="request-desirous-of-contraception"
            >Desirous of Contraception</ion-select-option
          >
          <ion-select-option value="report-abnormal-menstruation"
            >Abnormal Menstruation Report</ion-select-option
          >
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
          <ion-input v-model="recordDraft.physical!.weight" label="Weight (kg)" placeholder="50" />
        </ion-item>
      </div>
      <div v-if="recordType === 'diagnostic-infertility-work-up'">
        <h5>Additional Details</h5>
        <ion-item>
          <ion-select
            v-model="recordDraft.history_menstruation!.regular"
            label="Menstruation Pattern"
            placeholder="Click Here"
          >
            <ion-select-option :value="true">Irregular</ion-select-option>
            <ion-select-option :value="false">Regular</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-accordion-group>
          <ion-accordion value="marriage-datetime-picker">
            <ion-item slot="header">
              <ion-label
                >Date of Last Menstruation:
                {{
                  previousMenstruation
                    ? $dayjs(previousMenstruation as unknown as string).format("MMM DD, YYYY")
                    : "No date set"
                }}</ion-label
              >
            </ion-item>
            <div class="ion-padding" slot="content">
              <ion-datetime class="w-full" presentation="date" v-model="previousMenstruation" />
              <ion-item>
                <ion-input
                  v-model="recordDraft.history_menstruation!.previous_menstruation!.duration"
                  label="Period Duration (in days)"
                  type="number"
                  placeholder="7 days"
                />
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-item>
          <ion-select
            v-model="recordDraft.history_menstruation!.previous_menstruation!.amount_of_flow"
            label="Amount of Flow"
            placeholder="Click Here"
          >
            <ion-select-option value="light">Light</ion-select-option>
            <ion-select-option value="moderate">Moderate</ion-select-option>
            <ion-select-option value="heavy">Heavy</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-checkbox
            v-model="recordDraft.history_menstruation!.previous_menstruation!.dysmenorrhea"
            class="block w-fit py-2"
            label-placement="end"
          >
            Dysmenorrhea
          </ion-checkbox>
        </ion-item>
        <h5>Chief of Complaints</h5>
        <ion-item>
          <ion-textarea rows="5" placeholder="Complaints or additional details" />
        </ion-item>
        <h5>Patient Health Background</h5>
        <ion-accordion-group>
          <ion-accordion>
            <ion-item slot="header">History of Present Illnesses</ion-item>
            <div class="ion-padding" slot="content">
              <ion-checkbox
                v-model="recordDraft.history_present_illness!.lower_abdomen_pain"
                class="block w-fit py-2"
                label-placement="end"
                >Lower Abdomen Pain</ion-checkbox
              >
              <ion-checkbox
                v-model="recordDraft.history_present_illness!.lower_abdomain_pain_on_period"
                class="block w-fit py-2"
                label-placement="end"
                >Lower Abdomen Pain on Period</ion-checkbox
              >
              <ion-checkbox
                v-model="recordDraft.history_present_illness!.urination_pain"
                class="block w-fit py-2"
                label-placement="end"
                >Painful Urination</ion-checkbox
              >
              <ion-checkbox
                v-model="recordDraft.history_present_illness!.vaginal_discharge!.present"
                class="block w-fit py-2"
                label-placement="end"
                >Vaginal Discharge</ion-checkbox
              >
              <div v-if="recordDraft.history_present_illness?.vaginal_discharge?.present">
                <ion-item>
                  <ion-input
                    v-model="recordDraft.history_present_illness.vaginal_discharge.odor"
                    label="Odor"
                  ></ion-input>
                </ion-item>
                <ion-item>
                  <ion-input
                    v-model="recordDraft.history_present_illness.vaginal_discharge.coloration"
                    label="Color"
                  ></ion-input>
                </ion-item>
              </div>
              <ion-checkbox class="block w-fit py-2" label-placement="end">Bleeding on Contact</ion-checkbox>
            </div>
          </ion-accordion>
        </ion-accordion-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { Timestamp } from "firebase/firestore";
import { _RefFirestore } from "vuefire";
import { patientDocRefById } from "~/services/firebase";
import { Patient } from "~/types/patient";
import { Record, RecordType } from "~/types/record";

import { useRoute } from "vue-router";
const route = useRoute();

const patient = useDocument<Patient>(patientDocRefById(route.query.id as string));

console.log(route.query.id);

const recordType: Ref<RecordType> = ref("");
const initialRecordDraftState: Record = {
  type: recordType.value,
  created_at: Timestamp.fromDate(new Date()),
  physical: {
    blood_pressure: "",
  },
  history_menstruation: {
    previous_menstruation: {},
  },
  history_present_illness: {
    vaginal_discharge: {},
  },
};
const recordDraft: Ref<Record> = ref(initialRecordDraftState);

const recordTypeReadable = computed(() => {
  if (recordType.value === "diagnostic-infertility-work-up") return "Infertility Work Up";
  if (recordType.value === "other-general-remarks") return "General Remarks";
  if (recordType.value === "report-abnormal-menstruation") return "Abnormal Menstruation";
  if (recordType.value === "request-desirous-of-contraception") return "Desirous of Contraception";
});

const previousMenstruation = ref();
watch(previousMenstruation, () => {
  console.log(previousMenstruation.value);

  if (recordDraft.value.history_menstruation?.previous_menstruation?.started_at != undefined)
    recordDraft.value.history_menstruation.previous_menstruation.started_at = previousMenstruation.value;
});

watch(recordDraft, (oldValue, newValue) => {
  if (oldValue.type === newValue.type) return;
  recordDraft.value = initialRecordDraftState;

  if (!recordDraft.value.history_present_illness?.vaginal_discharge?.present) {
    recordDraft.value.history_present_illness!.vaginal_discharge = { present: false };
  }
});
</script>
