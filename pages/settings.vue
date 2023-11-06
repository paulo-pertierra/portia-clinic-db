<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button @click="signOutAndRedirect">Log Out</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
const ionRouter = useIonRouter();
const router = useRouter();

async function signOutAndRedirect() {
  await signOut(auth);
  router.go(0);
}
</script>
