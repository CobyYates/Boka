/* eslint-disable no-console */
<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="mx-auto mt-12">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignin">
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  v-model="password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="success">Sign In</v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        // eslint-disable-next-line no-console
        // console.log(this.email);
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
  }
</script>

<style>
</style>