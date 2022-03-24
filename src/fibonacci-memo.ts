let fibMemo: number[] = [];

const fib = (n: number): number => {
  if (n<0 || n%1) throw new Error(`Illegal arg: ${n}`)
  return fibMemo[n] || (() => {
    if (n<2) return fibMemo[n] = n;
    return fibMemo[n] = fib(n-1) + fib(n-2);
  })();
}

const run = (iter: number): number[] => {
  return new Array<number>(iter).fill(0).map((e,i) => fib(i));
}


const start = Date.now();
const generatedFibs = [run(20), fib(0), fib(16), fib(0x10), fib(9.000000)];
const end = Date.now();

console.info({durationMillis: end-start, fibs: [...generatedFibs]});

