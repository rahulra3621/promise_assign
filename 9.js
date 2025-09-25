async function steps() {
  let step1 = await new Promise(res => res("Step 1"));
  console.log(step1);

  let step2 = await new Promise(res => res("Step 2"));
  console.log(step2);
}

steps();
