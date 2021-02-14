<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="my-4">
        <div class="text-h4 mb-3">
          Task 3
        </div>

        <div class="subheading font-weight-regular">
          We want to display data in our table coming straight from our API.

          <div class="py-3">
            Open the file <code>/src/components/Task3.vue</code> and modify the code below so that:
            <ol class="list-center">
              <li>
                Check the console error(s) and fix it.
              </li>
              <li>
                The table should display the following columns:
                <ul>
                  <li>ID: user id</li>
                  <li>Name: combining user first name and last name</li>
                  <li>Age: in years rounded down</li>
                </ul>
              </li>
            </ol>
            Once completed, proceed to the next task.
          </div>
          <div class="text-caption">
            Note: feel free to edit any of the component properties (data, methods, etc..),
            <br /> and use any of the <strong>date-fns</strong> library functions but <strong>do not modify mock.js</strong>
          </div>
        </div>
      </v-col>

      <!-- eslint-disable -->
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-data-table
              :items="users"
              :headers="[
                {text: 'ID', value: 'id'},
                {text: 'Name', value: 'name'},
                {text: 'Age', value: 'age'},
              ]"
              hide-default-footer
            >
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- eslint-enable -->
    </v-row>
  </v-container>
</template>

<script>
  /* eslint-disable */
  import { loadUsers } from '../mock.js'
  import { parse } from 'date-fns'

  export default {
    name: 'Task3',
    data: () => ({
      users: [],
    }),
    created () {
      const users = loadUsers()
      users.forEach(user => {
        user.parsedDOB = parse(item.dateOfBirth, 'dd/dd/dddd', new Date())
      })
      this.users = data
    },
  }
  /* eslint-enable */
</script>
