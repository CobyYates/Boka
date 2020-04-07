/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import * as firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           resultsArr: [],
           user: null,
         },
         getters: {
           user(state) {
             return state.user;
           },
         },
         mutations: {
           setUser(state, payload) {
             state.user = payload;
           },
         },
         actions: {
           signUserUp({ commit }, payload) {
             firebase
               .auth()
               .createUserWithEmailAndPassword(payload.email, payload.password)
               .then((user) => {
                 const newUser = {
                   id: user.uid,
                   registeredMeetups: [],
                 };
                 commit("setUser", newUser);
               })
               .catch((error) => {
                 console.log(error);
               });
           },
           signUserIn({ commit }, payload) {
             firebase
               .auth()
               .signInWithEmailAndPassword(payload.email, payload.password)
               .then((user) => {
                 const newUser = {
                   id: user.uid,
                  //  fill logic for their existing data
                 };
                 commit("setUser", newUser);
               })
               .catch((error) => {
                 console.log(error);
               });
           },
         },
       });
