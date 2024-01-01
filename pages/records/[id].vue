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
      {{ record }}
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { recordDocRef } from '~/services/firebase';
const route = useRoute();

const record = useDocument(recordDocRef(route.params.id as string));
</script>