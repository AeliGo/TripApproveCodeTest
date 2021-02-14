<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="my-4">
        <div class="text-h4 mb-3">Task 5</div>

        <div class="subheading font-weight-regular">
          We want to create a trip list page

          <div class="py-3">You have been given the following wireframe:</div>

          <div>
            <img src="../assets/wireframe.png" width="600px" />
          </div>

          <div class="py-3">
            Open the file <code>/src/components/Task5.vue</code> and using the
            Vuetify library components <code>v-data-table</code> and any other
            relevant components, implement the wireframe.
          </div>

          <div>
            Feel free to diverge from the wireframe's look as needed, as long as
            the relevant information is displayed and it makes sense from a
            UI/UX perspective.
          </div>

          <div class="text-caption">
            Note: feel free to add any additional needed components and use
            <code>trips</code> to get a list of dummy trips.
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text>
            <!-- EDIT CODE BELOW -->
            <v-data-table
              :headers="[
                { text: 'ID', value: 'id' },
                { text: 'Name', value: 'name' },
                { text: 'Travellers', value: 'travellers' },
                { text: 'Destinations', value: 'destinations' },
                { text: 'Status', value: 'status' },
              ]"
              :items="trips"
              @click:row="handleRowClick"
            >
              <template v-slot:[`item.travellers`]="{ item }">
                <template v-for="(traveller, index) in item.travellers">
                  <v-tooltip top open-delay="300" :key="index">
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar size="30" color="green" v-bind="attrs" v-on="on">
                        <span class="white--text font-weight-medium">{{
                          traveller | initials
                        }}</span>
                      </v-avatar>
                    </template>
                    <span>{{ traveller }}</span>
                  </v-tooltip>
                </template>
              </template>
              <template v-slot:[`item.destinations`]="{ item }">
                <v-chip
                  v-for="destination in item.destinations"
                  :key="destination.location"
                  class="mr-1"
                  label
                  small
                  color="grey lighten-4"
                >
                  {{ destination.location }}
                </v-chip>
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <v-chip
                  label
                  small
                  expand
                  :color="getStatusByName(item.status).color"
                  :text-color="getStatusByName(item.status).textColor"
                >
                  {{ item.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* mock */
import { loadTrips } from "@/mock.js";
/* methods */
import { getStatusByName } from "@/constants/StatusList";

export default {
  name: "Task5",

  data() {
    return {
      trips: [],
    };
  },

  created() {
    this.loadTrips();
  },

  methods: {
    getStatusByName,

    loadTrips() {
      this.trips = loadTrips();
    },

    handleRowClick() {},
  },
};
</script>
