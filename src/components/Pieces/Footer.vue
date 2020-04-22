<template>
  <v-container fluid class="mt-12 pt-12">
    <v-footer dark padless>
      <v-card
        flat
        tile
        class="deep-purple lighten-1 white--text text-center"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="35px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <v-row>
            <v-col v-for="(column, i) in footerColumns" :key="i">
              <p class="body-1 font-weight-medium">{{ column.col[0].header }}</p>
              <p v-for="item in column.col" :key="item.i">{{ item.text }}</p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
           {{ new Date().getFullYear() }} — <strong>BOKA</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-facebook" },
      { icon: "mdi-twitter" },
      { icon: "mdi-google-plus" },
      { icon: "mdi-linkedin" },
      { icon: "mdi-instagram" },
    ],
    footerColumns: [
      {
        col: [
          { header: "Contact" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
        ],
      },
      {
        col: [
          { header: "Links" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
        ],
      },
      {
        col: [
          { header: "Footer" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
          { text: "lorem ipsum" },
        ],
      },
    ],
  }),
};
</script>
