export const setCategory = category => {
  console.log(category);
  switch (category) {
    case "Done":
      return;
    case "ToDo":
      console.log("yellow placeholder");
      break;
    case "Suspended":
      console.log("orange placeholder");
      break;
    default:
      console.log("default");
  }
};
