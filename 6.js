async function func() {
  let x = await new Promise((res) => {
    res("Hello Async");
  });
  console.log(x);
}

func();
