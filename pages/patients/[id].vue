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
          <div class="relative w-fit mx-auto">
            <img
              class="w-36 h-36 aspect-square mx-auto rounded-full border"
              :src="patient?.image ? patient?.image : defaultImage"
              alt=""
            />
            <button
              @click="takePicture()"
              class="absolute bottom-0 right-0 text-white text-xl bg-blue-400 rounded-full w-8 h-8 border"
            >
              <font-awesome-icon icon="fa-solid fa-pen" />
            </button>
          </div>
        </div>
        <ion-card-header>
          <ion-card-title class="text-center">{{
            patient?.first_name + " " + patient?.middle_name?.charAt(0) + ". " + patient?.last_name
          }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <p>Contact number: {{ patient?.contact_number }}</p>
          <p>Email address: {{ patient?.email_address }}</p>
          <p>Address: {{ patient?.address }}</p>
          <p>Sex: {{ patient?.sex }}</p>
          <p>
            Age:
            {{
              patient?.date_of_birth
                ? $dayjs(new Date()).diff(patient.date_of_birth.toDate(), "year")
                : "No age data"
            }}
          </p>
          <p class="pt-4">
            Status: added {{ friendlyDate.formatFromTimestamp(patient?.created_at) }}.
            <span v-if="patient?.updated_at"
              >Updated {{ friendlyDate.formatFromTimestamp(patient?.updated_at) }}.</span
            >
          </p>
        </ion-card-content>
      </ion-card>
      <ion-segment v-model="patientSegment">
        <ion-segment-button value="personal">
          <ion-label>Personal</ion-label>
        </ion-segment-button>
        <ion-segment-button value="records">
          <ion-label>Records</ion-label>
        </ion-segment-button>
      </ion-segment>
      <div class="w-full ion-padding" v-if="patientSegment === 'personal'"></div>
      <div class="w-full ion-padding" v-else>
        <ion-card v-for="record in records" @click="ionRouter.push(`/records/${record.id}`)">
          <ion-card-header>
            <ion-card-title>{{ toReadableRecordType(record.type) }}</ion-card-title>
            <ion-card-subtitle>{{ $dayjs((record.created_at as Timestamp).toDate()).format("hh:mm A, MMMM DD YYYY") }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content> Click on the card to view more details. </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
    <ion-fab
      v-if="patientSegment === 'records'"
      slot="fixed"
      vertical="bottom"
      horizontal="end"
      @click="ionRouter.push(`/patients/record?id=${patient?.id}`)"
    >
      <ion-fab-button>
        <ion-icon :icon="ioniconsAdd"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script lang="ts" setup>
const patientSegment = ref<"personal" | "records">("personal");

const ionRouter = useIonRouter();

import { useRoute } from "vue-router";
import { _RefFirestore } from "vuefire";
import { patientDocRef, patientRecordQueryRef } from "~/services/firebase";
import { Patient } from "~/types/patient";
const route = useRoute();

const patient: _RefFirestore<Patient | undefined> = useDocument(
  patientDocRef(route.params.id as string),
) as any;
const friendlyDate = useFriendlyDate();

const defaultImage =
  "https://firebasestorage.googleapis.com/v0/b/fernandez-clinic-dev.appspot.com/o/patients%2Fdefault-patient-img.jpg?alt=media&token=048e8e71-11d3-441f-8410-9ae97404c394&_gl=1*1xso72v*_ga*NzgwMTA4NjkuMTY5NTg3ODMzMw..*_ga_CW55HF8NVT*MTY5ODU2MzEwNi4xOS4xLjE2OTg1NjYyOTQuMjYuMC4w";

const modal = ref();
const input = ref();

const cancel = () => modal.value.$el.dismiss(null, "cancel");

const confirm = () => {
  const name = input.value.$el.value;
  modal.value.$el.dismiss(name, "confirm");
};

const onWillDismiss = (ev: CustomEvent<any>) => {};

import { Camera, CameraResultType } from "@capacitor/camera";
import { Record, RecordType } from "~/types/record";
import { Timestamp } from "firebase/firestore";
const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 50,
    allowEditing: true,
    resultType: CameraResultType.Base64,
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.base64String!;

  // Can be set to the src of an image now
  imageElement.value = imageUrl;
};

const imageElement = ref("");

watch(imageElement, () => {
  console.log(imageElement.value);
});

const records = useCollection<Record>(
  patientRecordQueryRef(route.params.id as string)
)

function toReadableRecordType(recordType: RecordType) {
  if (recordType === 'diagnostic-infertility-work-up') return "Infertility Workup"
  if (recordType === 'other-general-remarks') return "General Remarks / Misc. Records"
  if (recordType === 'report-abnormal-menstruation') return "Abnormal Menstruation"
  if (recordType === 'request-desirous-of-contraception') return "Desirous of Contraception"
}
</script>
