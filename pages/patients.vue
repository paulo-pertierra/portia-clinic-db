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
              <ion-select
                class="w-40"
                label="Sort"
                label-placement="stacked"
                v-model="patientSortBy"
                @ionChange="handleIonSelectChange($event)"
              >
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
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
// Patient Sorter
const patientSortBy = ref("last_name");

function handleIonSelectChange(event: CustomEvent) {
  console.log(event.detail.value);
}

const patients = [
  {
    id: "12345",
    lastName: "Flint",
    firstName: "Maria",
    middleName: "Bonnington",
    fullName: "Flint, Maria Bonnington",
    image: "https://i.pravatar.cc/300?img=36",
  },
  {
    id: "12347",
    lastName: "Morrison",
    firstName: "Chandre",
    middleName: "Lee",
    fullName: "Morrison, Chandre Lee",
    image: "https://i.pravatar.cc/300?img=45",
  },
];
</script>
