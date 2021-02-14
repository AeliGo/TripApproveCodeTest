import Vue from "vue";

Vue.filter("initials", function(value) {
  if (!value || typeof value !== "string") return "";

  return value
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
});
