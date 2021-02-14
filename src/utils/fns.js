import { differenceInYears, parse } from "date-fns";

/**
 * calculate age from date of birth
 *
 * @param date {String} - e.g "08/16/1990" or "2017-02-13"
 * @param format {String} - e.g "MM/dd/YYYY" or "YYYY-MM-dd"
 * @return age {Number}
 */
export const getAge = (date, format = "dd/MM/yyyy") => {
  return differenceInYears(new Date(), parse(date, format, new Date()));
};
