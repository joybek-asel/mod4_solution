var names = new Array();
names[0] = "John";
names[1] = "Paul";
names[2] = "George";
names[3] = "Ringo";
names[4] = "James";
names[5] = "Mary";
names[6] = "Alice";
names[7] = "jake";

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}