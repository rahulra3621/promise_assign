function UpperCase(str) {
  return new Promise((resolve) => {
    resolve(str.toUpperCase());
  });
}

UpperCase("hello world").then(console.log);
