let task = new Promise((res) => {
  setTimeout(() => {
    res("Task Completed");
  }, 2000);
});

task.then(res => console.log(res));
