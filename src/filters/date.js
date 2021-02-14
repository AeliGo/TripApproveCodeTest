import Vue from "vue";
import { format,parse } from "date-fns";

Vue.filter("date", function(date, FORMAT = "dd/MM/yyyy") {
  return format(parse(date, FORMAT, new Date()), "dd MMMM yyyy");
});
