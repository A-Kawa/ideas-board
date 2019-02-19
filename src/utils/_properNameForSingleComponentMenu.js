export const setProperName = color => {
  switch (color) {
    case "green":
      return "Active";
    case "yellow":
      return "To Do";
    case "orange":
      return "Suspended";
    default:
      console.error("Unexpected error!");
  }
};
