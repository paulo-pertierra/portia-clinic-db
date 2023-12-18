<template>
  <div class="w-screen h-screen bg-gray-200">
    <ion-app class="max-w-4xl mx-auto">
      <ion-menu content-id="main-content" menu-id="side-menu">
        <ion-header>
          <ion-toolbar>
            <ion-title>Documents</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <button
            @click="ionNavigateTo(`/home`)"
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
              :icon="ioniconsPeopleSharp"
            />
            <span class="pl-4">Patients</span>
            <ion-ripple-effect></ion-ripple-effect>
          </button>
          <button
            @click="ionNavigateTo(`/records`)"
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
            @click="ionNavigateTo(`/settings`)"
            class="w-full px-4 py-3 text-left flex items-center ion-activatable overflow-hidden relative select-none"
          >
            <ion-icon
              class="w-6 h-6 aspect-square flex items-center justify-center"
              :icon="ioniconsSettingsSharp"
            />
            <span class="pl-4">Settings</span>
            <ion-ripple-effect></ion-ripple-effect>
          </button>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content" />
    </ion-app>
  </div>
</template>

<script lang="ts" setup>
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

import { UseIonRouterResult } from "./types";
const ionRouter: UseIonRouterResult = useIonRouter();
async function ionNavigateTo(link: string) {
  await menuController.close("side-menu");
  ionRouter.push(link);
}
import { defineCustomElements } from "@ionic/pwa-elements/loader";
defineCustomElements(window);
</script>
