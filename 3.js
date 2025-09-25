new Promise((resolve) => {
  resolve(10);
})
  .then(num => num * 2)  
  .then(num => num + 5)  
  .then(res => console.log("Final Result:", res));
