<template>
  <v-container>
    <v-row justify="center" align="center" class="text-center">
        <v-col>
            <h1 class="cyan--text headline">What type of creator are you looking for?</h1>
        </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="shrink">
        <v-card 
            to="/content-type" 
            width="400px" 
            v-for="item in items" 
            :key="item.text"
            :elevation="6">
          <h3 class="pa-6 mt-9 text-center">{{item.text}}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    data: () => ({
        items: [
            {text: 'Photographer', to: ''},
            {text: 'Videographer', to: ''},
            {text: 'Drone Pilot', to: ''},
            {text: 'Editor', to: ''},
        ]
    })
};
</script>

<style></style>
