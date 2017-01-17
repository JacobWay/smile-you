function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

console.log("?");

function foo(x){
  const setTimeout = global.setTimeout || window.setTimeout;
  return new Promise( (resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function add2(x){
  var a = foo(1);
  var b = foo(2);
  return x + await a + await b;
}

console.log(add2(3));
add2(3).then( v => console.log(v));
