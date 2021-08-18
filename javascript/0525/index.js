let timed = (f) => (...args)=>{
  let start = performance.now();
  let ret = f(...args);
  console.log(`function ${f.name} took ${(performance.now()-start).toFixed(3)}ms`);
  return ret;   
}
function test() {
  let i = 100000;
  while(i--) {
    //  do nothing
  }
}
timed(test)();
