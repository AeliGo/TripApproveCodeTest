<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="my-4">
        <div class="text-h4 mb-3">
          Welcome to Trip Approve Technical Test
        </div>

        <p class="subheading font-weight-regular">
          This test was designed to get a understanding of your technical abilities and is focused around:
          <v-row justify="center" class="mt-2">
            <v-col>
              <v-chip v-for="skill in skills" :key="skill" class="mx-3">
                {{ skill }}
              </v-chip>
            </v-col>
          </v-row>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        Throughout this test, please free free to use online resources such as:
        <v-row justify="center">
          <v-col>
            <a
              v-for="(document, index) in documents"
              :href="document.href"
              :key="index"
              class="mx-3"
              target="_blank"
            >
              {{ document.text }}
            </a>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        Before you get started, make sure that:
        <ol class="list-center">
          <li>you have initiated the given repository via <code>git init</code></li>; and
          <li>as you code, document your steps with <code>git add</code> / <code>git commit</code></li>
        </ol>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        To begin, lets start with <router-link :to="{name: 'task-1'}"> task 1</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      documents: [
        {
          text: 'VueJS Documentation',
          href: 'https://vuejs.org/v2/guide/',
        },
        {
          text: 'Vuetify Documentation',
          href: 'https://vuetifyjs.com/en/introduction/why-vuetify/#guide',
        },
      ],
      skills: [ 'VueJS', 'HTML/CSS', 'JavaScript', ],
    }),
  }
</script>
