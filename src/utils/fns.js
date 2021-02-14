import { differenceInYears, parse } from "date-fns";
import { lookup } from "country-data";

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

/**
 * get random colour hexString
 *
 * @return colour hexString {String}
 */
export const getRandomColour = () => {
  const letters = "0123456789ABCDEF";
  let colour = "#";
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
};

/**
 * get country object by looking up name or alpha2 code
 *
 * @param name {String} - e.g "Canada","China"
 * @return country {Object} | null
 */
export const getCountryByNameOrAlpha2 = (name) => {
  let country = lookup.countries({ name });
  if (!country.length) {
    const countryByAlpha2 = lookup.countries({ alpha2: name });
    if (!countryByAlpha2.length) return null;

    country = lookup.countries({ name: countryByAlpha2[0].name });
  }
  return country.length ? country[0] : null;
};
