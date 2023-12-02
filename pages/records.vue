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
            <ion-searchbar></ion-searchbar>
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <documents-list v-for="patient in patients" :patient="patient" />
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup></script>
