<template>
  <v-container fluid>
    <v-parallax
      height="900"
      class="mb-8"
      src="https://images.pexels.com/photos/821944/pexels-photo-821944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      <v-overlay absolute>
        <div class="d-flex align-center justify-center">
            <v-row>
                <v-col cols="8" class="mx-0 px-0">
                    <p class="display-3 font-weight-medium white--text text-center">
                        Welcome to BOKA
                    </p>
                </v-col>
            </v-row>
        </div>
      </v-overlay>
    </v-parallax>

    <v-container fluid id="types">
        <v-row>
            <div class="d-flex mx-auto my-12">
                <v-col v-for="type in types" :key="type.i" class="mx-auto">
                    <v-card 
                        width="300" 
                        elevation="12">
                        <v-img 
                            :src="type.image"
                            height="300" />
                        <p class="display-1 text-center py-4">{{ type.text }}</p>
                    </v-card>
                </v-col>
            </div>
        </v-row>
    </v-container>
    

    <v-row>
        <div class="d-flex justify-center justify-space-between mx-auto">
            <Reviews />
        </div>
    </v-row>

    <Footer />
  </v-container>
</template>

<script>
import Footer from '../components/Pieces/Footer'
import Reviews from '../components/Pieces/HomeReviews'
export default {
    components:{
        Footer,
        Reviews
    },
    data () {
        return {
            types: [
                { image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: 'Videography', to: '' },
                { image: 'https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', text: 'Photography', to: '' },
                { image: 'https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: 'Drone', to: '' },
                { image: 'https://images.pexels.com/photos/3278129/pexels-photo-3278129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', text: 'Editing', to: '' },
            ]
        }
    }
}
</script>

<style scoped>
#hero {
    height: 1200px;
}

#types {
    background-color: grey;
}
</style>