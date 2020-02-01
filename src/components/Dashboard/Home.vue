<template>
  <v-container class="shrink">
    <v-row>
      <v-col class="d-flex justify-space-between">
        <v-card v-for="card in cards" :key="card.title" class="mx-auto" max-width="300" min-width="250">
          <v-card-text>
            <p class="title text--primary">
              {{card.title}}
            </p>
            <p>{{card.value}}</p>
            <div>
              <v-progress-linear :value="card.value"></v-progress-linear>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>

      </v-col>
      <v-col>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        cards: [
            { title: "Likes", icon: "", value: 100, },
            { title: "Clients", icon: "", value: 75, },
            { title: "Bookings", icon: "", value: 200, },
            { title: "Potential Clients", icon: "", value: 20, },
        ]
    })
};
</script>

<style></style>
