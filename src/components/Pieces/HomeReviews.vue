<template>
  <v-container>
    <p class="text-center display-1">SOME OF OUR CUSTOMERS</p>
      <v-row>
        <v-col cols="2" v-for="review in reviews" :key="review.i" class="mx-auto">
          <div class="text-center d-flex flex-column justify-center">
              <v-avatar class="mx-auto mt-6"><img :src="review.imgURL" /></v-avatar>
              <p class="title mt-3 mb-0">{{ review.name }}</p>
              <v-rating 
                color="yellow darken-3"
                value="5"
                readonly/>
              <v-text>{{review.text}}</v-text>
          </div>
        </v-col>
      </v-row>
      
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            reviews: [
                { name: 'Diana', rating: '5', text: 'I was able to quickly find a great photographer for my wedding. The process was easy and I felt comfortable and not pressured to contact our photographer.', imgURL: 'https://cdn.vuetifyjs.com/images/john.jpg' },
                { name: 'Terry', rating: '5', text: 'I was able to quickly find a great photographer for my wedding. The process was easy and I felt comfortable and not pressured to contact our photographer.', imgURL: 'https://cdn.vuetifyjs.com/images/john.jpg' },
                { name: 'Terry', rating: '5', text: 'I was able to quickly find a great photographer for my wedding. The process was easy and I felt comfortable and not pressured to contact our photographer.', imgURL: 'https://cdn.vuetifyjs.com/images/john.jpg' },
                { name: 'Heather', rating: '5', text: 'I was able to quickly find a great photographer for my wedding. The process was easy and I felt comfortable and not pressured to contact our photographer.', imgURL: 'https://cdn.vuetifyjs.com/images/john.jpg' },
            ]
        }
    }
}
</script>

<style scoped>

</style>