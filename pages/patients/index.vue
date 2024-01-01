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
            <ion-searchbar v-model="searchQuery" @keyup.prevent.enter="searchAlgolia(searchQuery)" />
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list v-if="!searchResult.length">
            <patients-list v-for="patient in patients" :patient="patient" />
          </ion-list>
          <ion-list>
            <div
              v-for="patient in searchResult" 
            >{{ patient }}</div>
          </ion-list>
          <ion-infinite-scroll @ionInfinite="ioninfinite">
            <ion-infinite-scroll-content></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end" @click="ionRouter.push('/patients/form')">
      <ion-fab-button>
        <ion-icon :icon="ioniconsAdd"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script lang="ts" setup>
import type { _RefFirestore } from "vuefire";
import { orderedByDatePatientQueryRef, patientColRef } from "~/services/firebase";
import { UseIonRouterResult } from "~/types";
import { Patient } from "~/types/patient";

const patients: _RefFirestore<Patient[]> = useCollection<Patient>(orderedByDatePatientQueryRef);

interface InfiniteSCrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
}

const ioninfinite = (event: InfiniteSCrollCustomEvent) => {
  // getNextPatientsBatch();
  setTimeout(() => event.target.complete(), 500);
};

const ionRouter: UseIonRouterResult = useIonRouter();

// Algolia Search Function

const searchQuery = ref("");
const searchResult = ref([]);

const searchAlgolia = async (query: string) => {
  if (!searchQuery.value) return;
  
  const { result, search } = useAlgoliaSearch("prod_patient");
  await search({ query });
  searchResult.value = result.value.hits as [];
}

watch(searchQuery, () => {
  if (!searchQuery.value) {
    searchResult.value = [];
    return;
  }
})
</script>
