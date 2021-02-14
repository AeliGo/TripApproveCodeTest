<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="my-4">
        <div class="text-h4 mb-3">
          Task 5
        </div>

        <div class="subheading font-weight-regular">
          We want to create a trip list page

          <div class="py-3">
            You have been given the following wireframe:
          </div>

          <div>
            <img src="../assets/wireframe.png" width="600px" />
          </div>

          <div class="py-3">
            Open the file <code>/src/components/Task5.vue</code> and using the Vuetify library components
            <code>v-data-table</code> and any other relevant components, implement the wireframe.
          </div>

          <div>
            Feel free to diverge from the wireframe's look as needed, as long as the relevant information
            is displayed and it makes sense from a UI/UX perspective.
          </div>

          <div class="text-caption">
            Note: feel free to add any additional needed components and use <code>trips</code> to get a list of dummy trips.
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text>
            <!-- EDIT CODE BELOW -->
            <v-data-table
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { loadTrips } from '../mock.js'

  export default {
    name: 'Task5',
    components: {
    },
    data () {
      return {
        trips: loadTrips(),
      }
    },
    methods: {
    },
  }
</script>
