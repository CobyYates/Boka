<template>
  <v-container fluid>
    <v-parallax
      height="900"
      class=""
      src="https://images.pexels.com/photos/821944/pexels-photo-821944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <v-overlay absolute>
        <div class="d-flex align-center flex-column justify-center">
            <v-row class="pt-12">
            <v-col cols="12">
              <div class="slider-wrapper">
                When you need a
                <div class="slider">
                  <div class="yellow--text slider-text1">Photographer</div>
                  <div class="yellow--text slider-text2">Videographer</div>
                  <div class="yellow--text slider-text3">Drone Operator</div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8" class="mx-auto px-0">
              <p class="display-3 font-weight-medium white--text text-center">
                Find them on <span class="display-4">BOKA</span>
              </p>
            </v-col>
          </v-row>
          
        </div>
      </v-overlay>
    </v-parallax>

    <v-container fluid id="types" class="mt-12">
      <p class="text-center display-1">BOKA HAS THE TALENT YOU NEED</p>
      <v-row>
        <div class="d-flex mx-auto mb-12">
          <v-col v-for="type in types" :key="type.i" class="mx-auto">
            <v-card width="300" elevation="12" class="type">
              <v-img :src="type.image" height="300" />
              <p class="display-1 text-center py-4">{{ type.text }}</p>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>

    <v-row>
        <v-col>
            <CTA />
        </v-col>
    </v-row>

    <v-row>
      <div class="d-flex justify-center justify-space-between mx-auto">
        <Examples />
      </div>
    </v-row>

    <v-row>
      <div class="d-flex justify-center justify-space-between mx-auto">
        <Reviews />
      </div>
    </v-row>

    <Footer />
  </v-container>
</template>

<script>
import Footer from "../components/Pieces/Footer";
import Reviews from "../components/Pieces/HomeReviews";
import Examples from "../components/Pieces/Examples";
import CTA from "../components/Pieces/CTA";
export default {
  components: {
    Footer,
    Reviews,
    Examples,
    CTA
  },
  data() {
    return {
      types: [
        {
          image:
            "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          text: "Videographers",
          to: "",
        },
        {
          image:
            "https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          text: "Photographers",
          to: "",
        },
        {
          image:
            "https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          text: "Drone Operators",
          to: "",
        },
        {
          image:
            "https://images.pexels.com/photos/3278129/pexels-photo-3278129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          text: "Editors",
          to: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
#hero {
  height: 1200px;
}

#types {
  /* background-color:rgb(29, 29, 29); */
}

.type {
  cursor: pointer;
}

.slider-wrapper {
  font-size: 40px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 50px;
  padding-left: 15px;
  margin-top: -10px;
  overflow: hidden;
}
.slider div {
  color: #fff;
  height: 50px;
  margin-bottom: 50px;
  text-align: left;
  box-sizing: border-box;
}
.slider-text1 {
  animation: slide 10s linear infinite;
}
@keyframes slide {
  0% {
    margin-top: -300px;
  }
  5% {
    margin-top: -200px;
  }
  33% {
    margin-top: -200px;
  }
  38% {
    margin-top: -100px;
  }
  66% {
    margin-top: -100px;
  }
  71% {
    margin-top: 0px;
  }
  100% {
    margin-top: 0px;
  }
}
</style>
