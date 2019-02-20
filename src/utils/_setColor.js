export const setColor = name => {
  switch (name) {
    case "Suspended":
      return "orange";
    case "ToDo":
      return "yellow";
    case "Done":
      return "green";
    default:
      //eslint-disable-next-line
      console.error("Unexpected error in setColor");
  }
};
