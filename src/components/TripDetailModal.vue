<template>
  <v-dialog
    :value="isActive"
    max-width="600px"
    @input="(value) => $emit('update:isActive', value)"
  >
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-card elevation="0" class="panel-left">
          <v-card-title class="d-flex justify-space-between px-4 py-6">
            <span class="headline">{{ data.name }}</span>
            <v-chip
              style="width: 100px; justify-content: center"
              label
              expand
              :color="getStatusByName(data.status).color"
              :text-color="getStatusByName(data.status).textColor"
            >
              {{ data.status }}
            </v-chip>
          </v-card-title>
          <v-card-text class="content pt-4">
            <strong>Destinations:</strong>
            <div
              v-for="destination in data.destinations"
              :key="destination.location"
              class="mt-4 d-flex justify-space-between"
            >
              <v-chip class="mr-1" label small color="grey lighten-4">
                <span class="pt-1" style="font-size: 18px">{{
                  parseLocation(destination.location).flag
                }}</span>
                <span class="pl-2">{{
                  parseLocation(destination.location).city
                }}</span>
              </v-chip>
              <span>
                <v-chip label small color="green lighten-5">
                  <span>{{ destination.start }}</span>
                </v-chip>
                ~
                <v-chip label small color="green lighten-5">
                  <span>{{ destination.start }}</span>
                </v-chip>
              </span>
            </div>
          </v-card-text>

          <v-card-actions class="px-2 py-4">
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="$emit('update:isActive', false)"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card elevation="0" class="panel-right">
          <v-list class="content" color="blue lighten-5">
            <v-list-item
              v-for="(traveller, index) in data.travellers"
              :key="index"
            >
              <v-list-item-avatar>
                <v-avatar size="33" :color="getRandomColour()">
                  <span class="white--text font-weight-medium">{{
                    traveller | initials
                  }}</span>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="traveller"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
/* methods */
import { getStatusByName } from "@/constants/StatusList";
import { getCountryByNameOrAlpha2, getRandomColour } from "@/utils/fns";

export default {
  name: "trip-detail-modal",

  props: {
    isActive: { type: Boolean, required: true },

    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getStatusByName,
    getRandomColour,

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
  },
};
</script>

<style lang="scss" scoped>
.panel-left,
.panel-right {
  min-height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  justify-content: space-between;
  .content {
    flex-grow: 2;
  }
}

.panel-left {
  .content {
    border-top: dashed 1px #ddd;
    border-bottom: dashed 1px #ddd;
  }
}
</style>