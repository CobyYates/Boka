<template>
  <v-container>
        <p class="text-center display-1">PROFESSIONALS FOR ALL YOUR NEEDS</p>
      <v-row>
          <v-col v-for="card in cards" :key="card.i" cols="3" >
              <v-container class="box">
                  <v-img :src="card.img" max-height="400" />
                  <div class="d-flex justify-space-between">
                    <p class="title">{{card.title}}</p>
                    <v-btn small color="deep-purple mt-2" dark>Search</v-btn>
                  </div>
              </v-container>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            cards: [
                { img: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Portrait' },
                { img: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Real Estate' },
                { img: 'https://images.pexels.com/photos/3766146/pexels-photo-3766146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Product' },
                { img: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Nature' },
                { img: 'https://images.pexels.com/photos/2536597/pexels-photo-2536597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Engagements' },
                { img: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Wedding' },
                { img: 'https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Arial' },
                { img: 'https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', title: 'Photo Editing' },
            ]
        }
    }
}
</script>

<style scoped>
.box {
    cursor: pointer;
}
</style>