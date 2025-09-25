async function dblnum() {
  let num = await new Promise((res) => res(10));
  let res = num * 2;
  console.log("Doubled:", res);
}

dblnum();