function calculateNumber() {
  let x = 5;
  x = x++;
  console.log(x);

  let y = 9;
  y = ++y;
  console.log(y);

  let z = 7;
  z = z--;
  console.log(z);

  let a = 8;
  a = --a;
  console.log(a);
}
calculateNumber();
