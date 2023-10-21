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
    <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu. </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
const ionRouter:UseIonRouterResult = useIonRouter();

const goToPatient = (id: string) => ionRouter.push(`/patient/${id}`);
</script>

<script lang="ts">
  import { IonActionSheet, IonButton } from '@ionic/vue';
import { UseIonRouterResult } from '~/types';

  export default {
    components: { IonActionSheet, IonButton },
    setup() {
      const actionSheetButtons = [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ];

      return { actionSheetButtons };
    },
  };
</script>