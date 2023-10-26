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
              <ion-select class="w-40" label="Sort" label-placement="stacked" v-model="patientSortBy"
                @ionChange="handleIonSelectChange($event)">
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
            <patients-list v-for="patient in patients" :patient="patient" />
          </ion-list>
          <ion-infinite-scroll @ionInfinite="ioninfinite">
            <ion-infinite-scroll-content></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end" @click="ionRouter.push('/patient/form')">
      <ion-fab-button>
        <ion-icon :icon="ioniconsAdd"></ion-icon>
      </ion-fab-button>
    </ion-fab>

  </ion-page>
</template>

<script lang="ts" setup>
import type { _RefFirestore } from 'vuefire';
import { patientColRef } from '~/services/firebase';
import { UseIonRouterResult } from '~/types';
import { Patient } from '~/types/patient';

// Patient Sorter
const patientSortBy = ref("last_name");

function handleIonSelectChange(event: CustomEvent) {
  console.log(event.detail.value);
}

// Patients data hardcoded

const patients: _RefFirestore<Patient[]> = useCollection(patientColRef) as any;

// function getNextPatientsBatch() {
//   console.log("wtf");
//   patients.value.push(...[
//   {
//     id: "12345",
//     lastName: "Flint",
//     firstName: "Maria",
//     middleName: "Bonnington",
//     fullName: "Flint, Maria Bonnington",
//     image: "https://i.pravatar.cc/300?img=36",
//   },
//   {
//     id: "12347",
//     lastName: "Morrison",
//     firstName: "Chandre",
//     middleName: "Lee",
//     fullName: "Morrison, Chandre Lee",
//     image: "https://i.pravatar.cc/300?img=45",
//   }
//   ])
// }

interface InfiniteSCrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
}

const ioninfinite = (event: InfiniteSCrollCustomEvent) => {
  // getNextPatientsBatch();
  setTimeout(() => event.target.complete(), 500)
}

const ionRouter: UseIonRouterResult = useIonRouter();
</script>
