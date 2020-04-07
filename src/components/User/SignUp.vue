/* eslint-disable no-console */
<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="mx-auto mt-12">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignup">
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
                <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmpassword"
                  v-model="confirmPassword"
                  type="password"
                  required
                  :rules="[comparePasswords]"
                ></v-text-field>
                <v-btn type="submit" color="success">Sign Up</v-btn>
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
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
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
      onSignup () {
        // eslint-disable-next-line no-console
        // console.log(this.email);
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
    }
  }
</script>

<style>
</style>