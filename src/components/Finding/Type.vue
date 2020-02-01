<template>
  <v-container>
    <v-row justify="center" align="center" class="text-center">
        <v-col>
            <h1 class="cyan--text headline">What can we help you with?</h1>
        </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="shrink">
        <v-card @click="creator = true" width="400px" :elevation="6">
          <h3 class="pa-6 mt-9 text-center">I'm a Creator</h3>
        </v-card>
        <v-card class="mt-10" @click="creator = false" width="400px" to="/creator-type" :elevation="6">
          <h3 class="pa-6 text-center">I'm Looking for a Creator</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { creator } from '../../App.vue'

export default {
  // props: [creator]
};
</script>

<style></style>
