<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Records</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Records</ion-card-title>
          <ion-card-subtitle>
            <ion-searchbar v-model="searchQuery" @keyup.prevent.enter="searchAlgolia(searchQuery)"></ion-searchbar>
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list v-if="!searchResult.length">
            <records-list v-for="record in records" :record="record" />
          </ion-list>
          <ion-list v-else>
            <div v-for="result in searchResult">{{ result }}</div>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { orderedByDateRecordQueryRef } from '~/services/firebase';
const records = useCollection(orderedByDateRecordQueryRef);

const searchQuery = ref("");

const searchResult = ref([]);
const searchAlgolia = async (query: string) => {
  if (!searchQuery.value) return;
  
  searchResult.value = [];
  const { result, search } = useAlgoliaSearch("prod_record");
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
