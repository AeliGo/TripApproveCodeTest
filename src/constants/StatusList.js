export const statusList = [
  {
    name: "Pending",
    textColor: "light-blue darken-2",
    color: "light-blue lighten-5",
  },
  {
    name: "Approved",
    textColor: "green accent-4",
    color: "green lighten-5",
  },
  {
    name: "Declined",
    textColor: "red darken-2",
    color: "red lighten-5",
  },
  {
    name: "Cancelled",
    textColor: "deep-purple darken-2",
    color: "deep-purple lighten-5",
  },
];

/**
 * get status object by name
 *
 * @param name {String}
 * @return status {Object}
 */
export const getStatusByName = (name) => {
  if (typeof name !== "string") throw Error("'name' should be a string.");
  return statusList.find((status) => status.name.toLowerCase() === name.toLowerCase()) || {};
};
