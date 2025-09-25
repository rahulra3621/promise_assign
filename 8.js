async function func() {
  try {
    let data = await new Promise((res,rej) => rej("Promise Rejected"));
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

func();
