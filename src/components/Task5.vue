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
              class="is-grid"
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
                      <v-avatar
                        size="30"
                        :color="getRandomColour()"
                        style="transform: scale(1.1)"
                        v-bind="attrs"
                        v-on="on"
                      >
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
                  <span class="pt-1" style="font-size: 18px">{{
                    parseLocation(destination.location).flag
                  }}</span>
                  <span class="pl-2">{{
                    parseLocation(destination.location).city
                  }}</span>
                </v-chip>
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <v-chip
                  style="width: 100px; justify-content: center"
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
    <trip-detail-modal
      v-if="dialogProps.isActive"
      :isActive.sync="dialogProps.isActive"
      :data="dialogProps.data"
    />
  </v-container>
</template>

<script>
/* mock */
import { loadTrips } from "@/mock.js";
/* methods */
import { getStatusByName } from "@/constants/StatusList";
import { getRandomColour, getCountryByNameOrAlpha2 } from "@/utils/fns";
/* modals */
import TripDetailModal from "@/components/TripDetailModal";

export default {
  name: "Task5",

  components: {
    TripDetailModal,
  },

  data() {
    return {
      trips: [],
      dialogProps: {
        isActive: false,
        data: {},
      },
    };
  },

  created() {
    this.loadTrips();
  },

  methods: {
    getStatusByName,
    getRandomColour,

    loadTrips() {
      this.trips = loadTrips();
    },

    /**
     * convert location string to country object with `flag` and `city`
     *
     * @param location {String} - e.g "Paris, France","Toronto, Canada"
     * @return country {Object} - e.g {flag: flag emoji, city: Paris}
     */
    parseLocation(location) {
      const [city, country = ""] = location.split(",");
      const countryData = getCountryByNameOrAlpha2(country.trim());
      return {
        flag: countryData ? countryData.emoji : "",
        city: countryData ? city : location,
      };
    },

    handleRowClick(row) {
      this.dialogProps = {
        isActive: true,
        data: row,
      };
    },
  },
};
</script>
