function checkAge(age) {
  return new Promise((res,rej) => {
    if (age >= 18) {
      res("Eligible");
    } else {
      rej("Not Eligible");
    }
  });
}

checkAge(20).then(console.log).catch(console.error);
checkAge(15).then(console.log).catch(console.error);
