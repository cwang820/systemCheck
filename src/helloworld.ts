const message: string = 'Hello World!';
console.log(`${message}, starting timedloop`);

setInterval(() => {
  console.log('Oooo Yeaaa 2000!');
}, 2000);// run this thang every 2 seconds

setInterval(() => {
  console.log('Oooo Yeaaa 1500!');
}, 1500);// run this thang every 2 seconds

console.log(`${message}, timedloop started`);
