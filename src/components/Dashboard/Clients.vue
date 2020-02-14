<template>
  <v-container class="text-center pt-0">
    <h1 class="text-center py-6 font-weight-light">Clients</h1>
    <!-- <v-data-table
      :headers="headers"
      :items="clients"
      sort-desc="approval"
      sort-by="approval"
      class="elevation-3 mx-12 my-6"
    > -->
    <v-data-table
      :headers="headers"
      :items="clients"
      :sort-by="['approval']"
      :sort-desc="[true, false]"
      class="elevation-3 mx-12 my-6"
    >

    <template v-slot:item.progress="{ item }">
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-progress-linear v-on="on" :color="paidColor(item.payments/item.totalPayment)" :value='((item.payments/item.totalPayment) * 100)'></v-progress-linear>
            </template>
            <span>{{item.payments}}/{{item.totalPayment}}</span>
        </v-tooltip>
    </template>

    <template v-slot:item.approval="{ item }">
      <v-chip :color="getColor(item.approval)" dark>{{ getApproved(item.approval) }}</v-chip>
    </template>

      <template v-slot:top>
        <v-toolbar flat>
        <v-toolbar-title>Clients</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Client Approval</span>
              </v-card-title>

              <!-- If student has not been approed, ability to approve -->
              <v-card-text v-if="editedItem.approval === false">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="text-center">
                      <p class="title font-weight-regular">
                        Would you like to approve <span class="font-weight-bold blue--text">{{editedItem.name}}</span> as a client?
                      </p> 
                    </v-col> 
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="editedItem.approval === false">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="green" @click="save(true)" dark>Approve</v-btn>
              </v-card-actions>

              <!-- end of not approving student -->

              <!-- If student has been approved, ability to remove approval -->
              <v-card-text v-if="editedItem.approval === true">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="text-center">
                      <p class="title font-weight-regular">
                        Would you like to remove approval for <span class="font-weight-bold blue--text">{{editedItem.name}}</span> as a client?
                      </p> 
                    </v-col> 
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions v-if="editedItem.approval === true">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="red" @click="save(false)" dark>Remove Approval</v-btn>
              </v-card-actions>

              <!-- end of removing approval from student -->
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.photo="{ item }">
          <v-avatar size="40px">
                <v-img 
                    :src="item.photo"
                    max-height=60    
                    max-width=60
                    class="circular-thumb-frame"> 
                </v-img>
          </v-avatar>          
      </template>
        
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-5 title" @click="editItem(item)" color="blue">
          mdi-pencil-outline
        </v-icon>
        <v-icon small class="title" @click="deleteItem(item)" color="red">
          mdi-trash-can-outline
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
        { text: 'Photo', value: `photo`, sortable: false },
        { text: 'Name',value: 'name', sortable: false, },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Job', value: 'job', sortable: false },
        { text: 'Payments', value: 'progress', sortable: false },
        { text: 'SignUp Date', value: 'signUp', sortable: false },
        { text: 'Accepted', value: 'approval' },
        { text: 'Actions', value: 'action', sortable: false },
    ],
    clients: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      email: '',
      windows: '',
    },
    defaultItem: {
      name: '',
      email: '',
      windows: '',
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === 'Approve client'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
  },
  created() {
    this.initialize()
  },
  methods: {
    getColor (approve) {
        // if (approval === true) return 'red'
        // else if (approval === false) return 'orange'
        // else return 'green'
        // console.log(approve)
        // console.log((clients[0].totalPayment/clients[0].payments) * 100)
        return (approve ? 'green' : 'red')
      },
    getApproved (approval) {
      if (approval === true) return 'Accepted'
      else return 'Pending'
    },
    paidColor (amount) {
        if (amount * 100 <= 50) {
            return "red"
        }
        else if (amount * 100 >= 75) {
            return "green"
        }
        else {
            return "orange"
        }
    },
    initialize() {
      this.clients = [
        {
          name: 'Jacob Mendez',
          photo: 'https://uinames.com/api/photos/male/2.jpg',
          email: 'jacobM@email.com',
          job: 'Photo Edit',
          signUp: '3/1/20',
          payments: 120,
          totalPayment: 120,
          approval: true
        },
        {
          name: 'Wayne Bates',
          photo: 'https://uinames.com/api/photos/male/15.jpg',
          email: 'waynebates@email.com',
          job: 'Wedding',
          signUp: '3/1/20',
          payments: 250,
          totalPayment: 950,
          approval: true
        },
        {
          name: 'Joyce Owens',
          photo: 'https://uinames.com/api/photos/female/21.jpg',
          email: 'jOwens@email.com',
          job: 'Photo Edit',
          signUp: '3/1/20',
          payments: 74,
          totalPayment: 100,
          approval: true
        },
        {
          name: 'Eugene Herrera',
          photo: 'https://uinames.com/api/photos/male/20.jpg',
          email: 'Eugenedude@email.com',
          job: 'Photo Edit',
          signUp: '3/1/20',
          payments: 0,
          totalPayment: 120,
          approval: false
        },
        {
          name: 'Brittany Washington',
          photo: 'https://uinames.com/api/photos/female/18.jpg',
          email: 'britWash@email.com',
          job: 'Wedding',
          signUp: '3/1/20',
          payments: 250,
          totalPayment: 1200,
          approval: true
        },
        {
          name: 'Alan Curtis',
          photo: 'https://uinames.com/api/photos/male/6.jpg',
          email: 'alancurtis@email.com',
          job: 'Photo Edit',
          signUp: '3/1/20',
          payments: 0,
          totalPayment: 80,
          approval: false
        },
        {
          name: 'Lauren Wells',
          photo: 'https://uinames.com/api/photos/female/10.jpg',
          email: 'laurenwells@email.com',
          job: 'Drone',
          signUp: '3/1/20',
          payments: 0,
          totalPayment: 750,
          approval: false
        },
      ]
    },
    editItem(item) {
      this.editedIndex = this.clients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      const index = this.clients.indexOf(item)
      confirm('Are you sure you want to delete this student?') &&
        this.clients.splice(index, 1)
    },
    close() {
      this.dialog = false
      
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save(test) {
      this.editedItem.approval = test
      if (this.editedIndex > -1) {
        Object.assign(this.clients[this.editedIndex], this.editedItem)
      } else {
        this.clients.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style>
</style>