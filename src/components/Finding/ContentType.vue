<template>
  <v-container>
    <v-row justify="center" align="center">
        <v-col>
            <h1 class="cyan--text headline text-center">What type of {{creatorType}} do you need?</h1>
        </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="text-center shrink" v-for="item in items" :key="item.text">
        <v-card 
            to="/content-type" 
            width="300px"  >
            <v-img :src="item.photo"></v-img>
          <h3 class="pa-2 text-center">{{item.text}}</h3>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    data: () => ({
        items: [
            {text: 'Wedding', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Portraits', to: '', photo: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"},
            {text: 'Headshot', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Engagements', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Family', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Commercial', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Special Event', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Aerial', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Pet', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Sports', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Nature', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Social Media', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Product', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Real Estate', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
            {text: 'Other', to: '', photo: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'},
        ]
    })
};
</script>

<style></style>
