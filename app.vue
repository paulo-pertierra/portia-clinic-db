<template>
  <ion-app class="max-w-xl mx-auto">
    <ion-menu content-id="main-content" menu-id="side-menu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Documents</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <button
          @click="ionNavigateTo(`/`)"
          class="w-full px-4 py-3 text-left flex items-center ion-activatable overflow-hidden relative select-none"
        >
          <ion-icon
            class="w-6 h-6 aspect-square flex items-center justify-center"
            :icon="ioniconsHomeSharp"
          />
          <span class="pl-4">Home</span>
          <ion-ripple-effect></ion-ripple-effect>
        </button>
        <button
          @click="ionNavigateTo(`/patients`)"
          class="w-full px-4 py-3 text-left flex items-center ion-activatable overflow-hidden relative select-none"
        >
          <ion-icon
            class="w-6 h-6 aspect-square flex items-center justify-center"
            :icon="ioniconsPersonSharp"
          />
          <span class="pl-4">Patients</span>
          <ion-ripple-effect></ion-ripple-effect>
        </button>
        <button
          @click="ionNavigateTo(`/patients`)"
          class="w-full px-4 py-3 text-left flex items-center ion-activatable overflow-hidden relative select-none"
        >
          <ion-icon
            class="w-6 h-6 aspect-square flex items-center justify-center"
            :icon="ioniconsDocumentsSharp"
          />
          <span class="pl-4">Documents</span>
          <ion-ripple-effect></ion-ripple-effect>
        </button>
        <button
          @click="ionNavigateTo(`/`)"
          class="w-full px-4 py-3 text-left flex items-center ion-activatable overflow-hidden relative select-none"
        >
          <ion-icon
            class="w-6 h-6 aspect-square flex items-center justify-center"
            :icon="ioniconsSettingsSharp"
          />
          <span class="pl-4">My Settings</span>
          <ion-ripple-effect></ion-ripple-effect>
        </button>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script lang="ts" setup>
import "./ionic.styles";

import { UseIonRouterResult } from "./types";
const ionRouter: UseIonRouterResult = useIonRouter();
async function ionNavigateTo(link: string) {
  await menuController.close("side-menu");
  ionRouter.push(link);
}
</script>
