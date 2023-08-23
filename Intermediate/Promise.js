const p1 = Promise.resolve(50);
const p2 = new Promise((resolve, reject) =>
setTimeout(reject, 100, 'geek'));
const prm = [p1, p2];
  
Promise.allSettled(prm)
.then((results) => results.forEach((result) =>
console.log(result.status,result.value)));