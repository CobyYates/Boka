<template>
  <v-row justify="center" align="center">
    <v-col class="shrink">
      <v-card @click="creator = true">
        <h1 class="pa-6">Creator</h1>
      </v-card>
      <v-card class="mt-10" @click="creator = false">
        <h1 class="pa-6 text-center">Client</h1>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    
};
</script>

<style>
</style>
