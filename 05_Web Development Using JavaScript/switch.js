var p = 70;
if (p < 100) {
  if (p < 80) {
    if (p < 60) {
      if (p < 50) {
        console.log(`${p}% less then 50%`);
      } else {
        console.log(`${p}% more then 50%`);
      }
      console.log(`${p}% less then 60%`);
    } else {
      console.log(`${p}% more then 60%`);
    }
    console.log(`${p}% less then 80%`);
  } else {
    console.log(`${p}% more then 80%`);
  }
  console.log(`${p}% less then 100%`);
} else {
  console.log(`${p}% more then 100%`);
}