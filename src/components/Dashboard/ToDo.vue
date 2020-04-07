<template>
  <v-container class="text-center pt-0">
    <h1 class="text-center py-6 font-weight-light">Clients</h1>
    <v-row>
      <v-col cols="2" class="pr-0 mr-0 filters" background-color="red">
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
                          v-model="editedItem.todo"
                          label="Task"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <!-- <p>Labels</p> -->
                        <div class="d-flex flex-column align-start">
                            <v-btn 
                                v-for="label in labels" 
                                :key="label" text
                                @click="addLabel(label)"
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
            <v-btn text v-for="filter in filters" :key="filter">
              <v-icon size="medium" class="pr-3">
                {{ filter.icon }} </v-icon
              >{{ filter.text }}</v-btn
            >
            <v-divider width="150"></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex flex-column align-start">
            <p>Labels</p>
            <v-btn v-for="label in labels" :key="label" text>
                <v-icon size="small" :color="label.color" class="pr-3">mdi-checkbox-blank-circle-outline</v-icon>{{ label.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10" class="pl-0 ml-0">
        <v-data-table
          :headers="headers"
          :items="clients"
          :sort-by="['approval']"
          :sort-desc="[true, false]"
          hide-default-footer="true"
          class="elevation-3 mx-12 my-6 pl-0 ml-0"
        >
          <template v-slot:item.checkbox="{ item }">
            <v-checkbox v-model="item.status" color="teal lighten-2"></v-checkbox>
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
      { text: "Todo", value: "todo", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    clients: [],
    editedIndex: -1,
    editedItem: {
      todo: ""
    },
    defaultItem: {
      todo: ""
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === "Approve client";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    getColor(approve) {
      // if (approval === true) return 'red'
      // else if (approval === false) return 'orange'
      // else return 'green'
      // console.log(approve)
      // console.log((clients[0].totalPayment/clients[0].payments) * 100)
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
    initialize() {
      (this.clients = [
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "editing",
          status: true
        },
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "editing",
          status: true
        },
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "business",
          status: true
        },
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "contact",
          status: true
        },
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "editing",
          status: true
        },
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "contact",
          status: true
        },
        {
          todo:
            "This is a task the needs to be completed. Such as editing a photo or contacting a client.",
          signUp: "3/1/20",
          label: "personal",
          status: true
        }
      ]),
        (this.labels = [
          { color: "yellow darken-2", text: "Editing" },
          { color: "red", text: "Business" },
          { color: "green", text: "Contact" },
          { color: "blue", text: "Personal" }
        ]),
        (this.filters = [
          { text: "all", icon: "mdi-star-outline" },
          { text: "important", icon: "mdi-exclamation-thick" },
          { text: "completed", icon: "mdi-check" },
          { text: "trashed", icon: "mdi-trash-can-outline" }
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
    addLabel(label) {
        this.item.label.push(label)
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
    }
  }
};
</script>

<style>
  
</style>
