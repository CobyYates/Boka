<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col>
        <h1 class="cyan--company headline company-center">
          Here are your {{ creatorType }}
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col
        class="company-center shrink"
        v-for="creator in creators"
        :key="creator.id"
      >
        <v-card class="mx-auto" max-width="450" min-width="450" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="title mb-0">{{ creator.company }}</v-list-item-title>
              <div class="d-flex">
                <v-rating
                    :value="creator.reviews[0].rating"
                    color="amber"
                    dense
                    half-increments
                    size="14"
                    class="my-0 py-0"
                ></v-rating>
                <p class="pl-3 mt-0 mb-1">({{ creator.reviews.length }})</p>
              </div>              
              <v-list-item-subtitle class="mb-1">{{ creator.description }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              style="border-radius: 50px;"
              tile
              size="70"
              class="ml-1"
              color="grey"
              ><v-img style="border-radius: 50px;" :src="creator.photo"></v-img
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions class="py-0">
            <v-btn text class="pb-3">Button</v-btn>
            <v-btn text class="pb-3">Button</v-btn>
            <v-spacer/>
            <v-rating
                :value="0"
                color="pink lighten-2"
                background-color="pink lighten-2"
                dense
                length="1"                
                empty-icon='mdi-heart-outline'
                full-icon="mdi-heart"
                size="25"
                class="my-0 py-0"
                ></v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    creators: [
      {
        company: "Making Moments Photo",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/20.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Behind the Lense Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/2.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Darkroom Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/3.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/male/8.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/male/6.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/male/16.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/male/20.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/23.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/12.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/13.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      },
      {
        company: "Photography",
        to: "",
        reviews: [
          { review: "", rating: "4", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3.5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "5", reviewer: { name: "", photo: "" } },
          { review: "", rating: "3", reviewer: { name: "", photo: "" } }
        ],
        photo: "https://uinames.com/api/photos/female/10.jpg",
        description:
          "I am the best at I we do, I have been in business now for 10 years. Let me make your dreams a reality!"
      }
    ]
  }),
};
</script>

<style></style>
