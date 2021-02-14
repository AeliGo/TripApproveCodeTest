<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
    >
      <div class="d-flex align-center">
        <v-img
          alt="Trip Approve Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <div
          class="shrink mt-1 text-h5"
          contain
          min-width="100"
          width="100"
        >
          <b class="primary--text">TRIP</b>Approve
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      app
      dark
      color="primary"
      clipped
      permanent
    >
      <v-list
        class="py-0"
        dense
        tile
      >
        <v-list-item
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.name }"
          exact
          link
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="text-capitalize">
            <v-list-item-title> {{ link.text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    links: [
      { name: 'home', icon: 'mdi-home', text: 'Home' },
      { name: 'task-1', icon: 'mdi-numeric-1-box-outline', text: 'Task 1' },
      { name: 'task-2', icon: 'mdi-numeric-2-box-outline', text: 'Task 2' },
      { name: 'task-3', icon: 'mdi-numeric-3-box-outline', text: 'Task 3' },
      { name: 'task-4', icon: 'mdi-numeric-4-box-outline', text: 'Task 4' },
      { name: 'task-5', icon: 'mdi-numeric-5-box-outline', text: 'Task 5' },
    ]
  }),
};
</script>

<style>
  .list-center {
    text-align: center;
    list-style-position: inside;
  }
  .list-center li {
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>
