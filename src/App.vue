<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      v-if="creator == true"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="deep-purple lighten-1"
      dense
    >
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <!-- <img src="./assets/boka_logo_sm.png" alt="Boka Logo" class="mr-5 logo"> -->
      <v-toolbar-title class="mr-12 align-center">
        <span class="subtitle-1 white--text"><strong>BOKA</strong><span>PROFESSIONALS</span></span>
      </v-toolbar-title>
      <v-spacer />
      <v-row
        align="end"
        style="max-width: 120px"
        class="d-flex align-center justify-space-between pr-7"
      >
      <v-badge
        :content="messages"
        :value="messages"
        color="red"
        overlap
        dot
      >
        <v-icon medium class="white--text">mdi-bell-outline</v-icon>
      </v-badge>
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <router-view/> 
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      message: 5,
      show: false,
      creator: true,
      items: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', to: "/dashboard" },
        { icon: 'mdi-account-box-multiple', text: 'Clients', to: "/clients" },
        { icon: 'mdi-forum', text: 'Chat', to: "/chat" },
        { icon: 'mdi-calendar-month', text: 'Calendar', to: "/calendar" },
        { icon: 'mdi-check', text: 'ToDo', to: "/to-do" },
        { icon: 'mdi-settings', text: 'Account', to: "/account" },
        { icon: 'mdi-file-document-edit', text: 'Contract', to: "/contract" },
      ]
    }),
    created () {
      // this.$vuetify.theme.dark = true
    },
  }
</script>

<style lang="stylus" scoped>
</style>