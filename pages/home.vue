<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu.    {{ records }} </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { specDoc } from "~/services/firebase";
const records = useDocument(specDoc);

console.log(records);

</script>