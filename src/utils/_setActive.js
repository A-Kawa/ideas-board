export const setActiveCategory = active => {
  switch (active) {
    case "orange":
      return "Suspended";
    case "yellow":
      return "ToDo";
    case "green":
      return "Done";
    default:
      //eslint-disable-next-line
      console.error("Unexpected error in setColor");
  }
};
