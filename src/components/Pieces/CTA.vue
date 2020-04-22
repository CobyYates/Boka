<template>
  <v-container fluid class="back py-12 mb-12">
    <v-row class="mx-8">
      <v-col cols="3" class="d-flex align-center">
        <!-- <v-img src="../../assets/CMS.png" class="cmsImg elevation-8" /> -->
      </v-col>
      <v-col class="text-center mx-auto cta" cols="6">
        <p class="display-1 font-weight-bold">
          Are you a CREATOR?
        </p>
        <p class="headline">
          We provide you with the tools to keep track of all your clients. Check
          out our easy to use <span class="cms">Client Management Tool</span>
        </p>
        <v-row>
            <v-col v-for="item in items" :key="item.i" class="pb-0">
                <v-avatar size="70px" color="#df4a3d" >
                    <v-icon x-large color="white">{{item.icon}}</v-icon>
                </v-avatar>
                <p class="iconText title">{{ item.text }}</p>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { icon: 'mdi-calendar-month', text: 'Calendar' },
                { icon: 'mdi-calendar-arrow-right', text: 'Scheduling' },
                { icon: 'mdi-account-box-multiple', text: 'Clients' },
                { icon: 'mdi-forum', text: 'Chat' },
                { icon: 'mdi-check', text: 'To Do\'s' },
            ]
        }
    }
};
</script>

<style scoped>
.cms {
  text-decoration: underline;
}
.cmsImg{
    /* transform: rotate(-10deg); */
}
</style>
