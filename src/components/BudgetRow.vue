<template>
  <!-- EDIT CODE BELOW -->
  <v-row class="align-center">
    <v-col cols="2">
      <v-btn icon small dark color="primary" @click.stop="$emit('deleted')">
        <v-icon> mdi-minus-circle </v-icon>
      </v-btn>
    </v-col>
    <v-col cols="5">
      <v-select
        :value="type"
        label="Budget Type"
        :items="budgeTypes"
        :item-text="(item) => item.name"
        return-object
        @input="(value) => $emit('update:type', value)"
      />
    </v-col>
    <v-col cols="5">
      <v-text-field
        :value="amount"
        class="currency-input"
        label="Enter amount"
        type="number"
        prefix="$"
        @input="(value) => $emit('update:amount', Number(value))"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "budget-row",

  props: {
    amount: {
      type: Number,
      default: 0,
    },

    type: {
      type: Object,
      default: null,
    },

    budgeTypes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
