<template>
    <ion-content class="ion-padding">
      <div class="h-full flex items-center pb-20">
        <div class="w-full">
          <h1 class="text-center pb-8">Log in to Clinic DB</h1>
          <div class="w-3/4 mx-auto">
            <ion-input v-model="username" id="username" label="User Name" label-placement="floating" :counter="true"
              maxlength="32" @keyup.enter="signInAndRedirect" />
            <ion-input v-model="password" type="password" id="username" label="Password" label-placement="floating"
              :counter="true" maxlength="32" @keyup.enter="signInAndRedirect" />
            <ion-button @click="signInAndRedirect()" size="large" class="w-full my-8">
              Log In </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
</template>

<script lang="ts" setup>
const ionRouter = useIonRouter();
import { signInWithEmailAndPassword } from "firebase/auth";
const auth = useFirebaseAuth()!;
const username = ref("");
const password = ref("");
async function signInAndRedirect() {
  await signInWithEmailAndPassword(auth, username.value, password.value);
  ionRouter.push("/home")
}
</script>