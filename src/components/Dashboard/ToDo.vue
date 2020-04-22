<template>
  <v-container class="text-center pt-0">
    <h1 class="text-center py-6 font-weight-light">To Do List</h1>
    <v-row>
        <v-col cols="2" class="pr-0 mr-0 filters">
      <v-card class="mt-6 d-flex flex-column align-center" width="80%">
          <v-row>
            <v-col class="d-flex flex-column align-start pr-0 mr-0">
              <v-dialog v-model="dialog" max-width="500px" persistent>
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="teal lighten-2"
                    dark
                    class="mb-2"
                    width="150"
                    v-on="on"
                    >Add Task</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">New Task</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <v-textarea
                            v-model="editedItem.text"
                            label="Task"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <div class="d-flex flex-column align-start">
                            <v-btn
                              v-for="label in labels"
                              :key="label.i"
                              text
                              @click="addLabel(label, editedItem)"
                              ><v-icon
                                size="small"
                                :color="label.color"
                                class="pr-3"
                                >mdi-checkbox-blank-circle-outline</v-icon
                              >{{ label.text }}</v-btn
                            >
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" @click="save" dark>Add</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-btn text color="teal lighten-2"
                ><v-icon size="medium" class="pr-3"
                  >mdi-layers-triple-outline</v-icon
                >All</v-btn
              >
              <v-divider width="150"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column align-start">
              <p>Filters</p>
              <v-btn text v-for="filter in filters" :key="filter.i">
                <v-icon size="medium" class="pr-3"> {{ filter.icon }} </v-icon
                >{{ filter.text }}</v-btn
              >
              <v-divider width="150"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column align-start">
              <p>Labels</p>
              <v-btn v-for="label in labels" :key="label.i" text>
                <v-icon size="small" :color="label.color" class="pr-3"
                  >mdi-checkbox-blank-circle-outline</v-icon
                >{{ label.text }}
              </v-btn>
            </v-col>
          </v-row>
      </v-card>
        </v-col>
      <v-col cols="10" class="pl-0 ml-0">
        <v-data-table
          :headers="headers"
          :items="clients"
          :sort-by="['approval']"
          :sort-desc="[true, false]"
          hide-default-footer
          class="elevation-3 mx-12 my-6 pl-0 ml-0"
        >
          <template v-slot:item.checkbox="{ item }">
            <v-checkbox
              v-model="item.status"
              color="teal lighten-2"
            ></v-checkbox>
          </template>

          <template v-slot:item.text="{ item }">
            <v-chip small v-for="label in item.labels" :key="label.i" class="mr-3" color="grey lighten-3">
              <div class="d-flex align-baseline my-0">
                <v-icon :color="labelColor(label)" x-small class="mr-2">mdi-checkbox-blank-circle-outline</v-icon>
                <p class="my-0 overline">{{label}}</p>
              </div>
            </v-chip>
            <div
              :class="(item.status && 'grey--text') || 'black--text'"
              v-text="item.text">
            </div>
          </template>

          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-5 title"
              @click="editItem(item)"
              color="blue"
            >
              mdi-pencil-outline
            </v-icon>
            <v-icon small class="title" @click="deleteItem(item)" color="red">
              mdi-trash-can-outline
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "", value: `checkbox`, sortable: false },
      { text: "Todo", value: "text", sortable: false },
      { text: "Actions", value: "action", sortable: false },
    ],
    clients: [],
    editedIndex: -1,
    editedItem: {
      text: "",
    },
    defaultItem: {
      text: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === "Approve client";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    getColor(approve) {
      return approve ? "green" : "red";
    },
    getApproved(approval) {
      if (approval === true) return "Accepted";
      else return "Pending";
    },
    paidColor(amount) {
      if (amount * 100 <= 50) {
        return "red";
      } else if (amount * 100 >= 75) {
        return "green";
      } else {
        return "orange";
      }
    },
    labelColor(label) {
      if (label === "editing" || label === "Editing") {return "yellow darken-2"}
      if (label === "business" || label === "Business") {return "red"}
      if (label === "contact" || label === "Contact") {return "green"}
      if (label === "personal" || label === "Personal") {return "blue"}
      
    },
    initialize() {
      (this.clients = [
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["editing", "business"],
          status: false,
        },
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["editing"],
          status: false,
        },
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["business"],
          status: false,
        },
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["contact"],
          status: false,
        },
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["editing"],
          status: false,
        },
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["contact"],
          status: false,
        },
        {
          text:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          labels: ["personal"],
          status: false,
        },
      ]),
        (this.labels = [
          { color: "yellow darken-2", text: "Editing" },
          { color: "red", text: "Business" },
          { color: "green", text: "Contact" },
          { color: "blue", text: "Personal" },
        ]),
        (this.filters = [
          { text: "all", icon: "mdi-star-outline" },
          { text: "important", icon: "mdi-exclamation-thick" },
          { text: "completed", icon: "mdi-check" },
          { text: "trashed", icon: "mdi-trash-can-outline" },
        ]);
    },
    editItem(item) {
      this.editedIndex = this.clients.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.clients.indexOf(item);
      confirm("Are you sure you want to delete this task?") &&
        this.clients.splice(index, 1);
    },
    addLabel(label, item) {
      this.editedIndex = this.clients.indexOf(item);
      this.clients[this.editedIndex].labels.push(label);
    },
    close() {
      this.dialog = false;

      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save(test) {
      this.editedItem.approval = test;
      if (this.editedIndex > -1) {
        Object.assign(this.clients[this.editedIndex], this.editedItem);
      } else {
        this.clients.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
