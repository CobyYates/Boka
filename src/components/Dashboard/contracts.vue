<template>
  <v-container>
    <v-row>
      <v-col v-for="contract in contracts" :key="contract.title" cols="6">
        <v-card class="text-center d-flex flex-column py-8">
          <v-icon x-large class="display-4" :color="contract.color">{{contract.icon}}</v-icon>
          <v-card-content class="title">{{ contract.title }}</v-card-content>
          <v-card-subtitle>{{contract.subtitle}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contracts: [
      { title: "Photography Contract", subtitle: 'Contracts for photography', icon: "mdi-camera-outline", color: 'green lighten-1' },
      { title: "Editting Contract", subtitle: 'Photoshop contracts for editting', icon: "mdi-image-edit-outline", color: 'light-blue darken-2' },
      { title: "Blank", subtitle: 'Create a new contract', icon: "mdi-plus-box-multiple-outline", color: 'purple lighten-1' },
      { title: "Signed Contracts", subtitle: 'Previously signed contracts', icon: "mdi-signature-freehand", color: 'red lighten-1' },
    ]
  })
};
</script>

<style>

</style>
