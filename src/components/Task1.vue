<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="my-4">
        <div class="text-h4 mb-3">
          Task 1
        </div>

        <div class="subheading font-weight-regular">
          We want to create a dynamic profile card.

          <div class="py-3">
            Open the file <code>/src/components/Task1.vue</code> and modify the code below so that:
            <ol class="list-center">
              <li>
                The user profile information (first name, last name, occupation) is hidden by default.
              </li>
              <li>
                When the "toggle" button is clicked, the user profile information is displayed.
              </li>
              <li>
                When the "toggle" button is clicked a second time, the user profile information is hidden.
              </li>
            </ol>
            Once completed, proceed to the next task.
          </div>
          <div class="text-caption">
            Note: feel free to edit any of the component properties (data, methods, etc..)
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- EDIT CODE BELOW -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-icon class="mr-4">mdi-account-circle</v-icon> My profile
          </v-card-title>

          <v-card-actions>
            <v-btn color="primary" small text>
              toggle
            </v-btn>
          </v-card-actions>

          <v-card-text class="mx-4">
            <v-row no-gutters>
              <v-col cols="3">
                <strong>First Name:</strong>
              </v-col>
              <v-col cols="9">
                <div>John</div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <strong>Last Name:</strong>
              </v-col>
              <v-col cols="9">
                <div>Wick</div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="3">
                <strong>Occupation:</strong>
              </v-col>
              <v-col cols="9">
                <div>Retired-hitman wannabe</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Task1',
    data () {
      return {}
    },
    methods: {
    },
  }
</script>
