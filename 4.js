new Promise((res, rej) => {
  rej("Something went wrong!");
})
  .then(console.log)
  .catch(err => console.error("Error caught:", err));
