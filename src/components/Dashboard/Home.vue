<template>
  <v-container class="shrink">
    <v-row>
      <v-col class="d-flex justify-space-between px-0 mb-4">
        <v-card
          v-for="card in cards"
          :key="card.title"
          class="mx-3"
          max-width="300"
          min-width="250"
          height="120"
          :elevation="6"
        >
          <v-card-text>
              <v-row>
                <v-col class="mb-0">
                    <p class="body-1 text--primary mb-0">{{ card.title }}</p>
                    <p class="mb-0">{{ card.value }}</p>
                </v-col>
                <v-col lg="1" class="d-flex justify-end align-start mb-0">
                    <v-icon size="50">{{ card.icon }}</v-icon>
                </v-col>
              </v-row>
            <div>                
              <v-progress-linear class="mb-0" :value="card.value"></v-progress-linear>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card :elevation="6" class="mx-auto text-center" color="blue" dark max-width="600">
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                auto-draw
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-fine">Sales Last 7 months</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
          <v-card :elevation="6" height="400" class="d-flex align-center justify-center" color="green">
              <div class="text-center">
                  <h2 class="white--text">CHAT Window</h2>
                  <a class="white--text" href="https://vuejsexamples.com/a-simple-chat-component-created-with-vue-js/">Maybe this?</a> <br>
                  <a class="white--text" href="https://vuejsexamples.com/a-modern-group-chat-application-using-vue-js-and-cometchat/">Or this?</a> <br>
                  <a class="white--text" href="https://vuejsexamples.com/tag/chat/">Or any of these...</a>
              </div>
          </v-card>
          <v-card class="mt-10" :elevation="6">
            <v-card-title class="display-1">Edit 15 Photos/Day</v-card-title>
            <div class="d-flex justify-center">
                <v-progress-circular
                :rotate="-90"
                :size="250"
                :width="25"
                :value="(goal.complete/goal.goal) * 100"
                color="red">
                <p class="display-3">{{ goal.complete/goal.goal * 100 }}%</p>
            </v-progress-circular>
            </div>
            <v-divider class="mt-6"></v-divider>
            <v-row>
                <v-col class="text-center">
                    <p>Completed</p>
                    {{goal.complete}}
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center">
                    <p>In Progress</p>
                    {{goal.goal}}
                </v-col>
            </v-row>            
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: "Likes", icon: "mdi-thumb-up", value: 100, backColor: "", color: "" },
      { title: "Clients", icon: "mdi-account-box-multiple", value: 75, backColor: "", color: "" },
      { title: "Bookings", icon: "mdi-camera", value: 200, backColor: "", color: "" },
      { title: "Potential Clients", icon: "mdi-account-clock", value: 20, backColor: "", color: "" }
    ],
    value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    goal: {goal: 20, complete: 10}
  })
};
</script>

<style></style>
