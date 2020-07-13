export default function leastInterval(tasks: string[], n: number): number {
  if (tasks === undefined || tasks.length === 0) {
    return 0;
  }

  let map = new Map();
  let max = 0;
  let maxLength = 0;
  // for (let t in tasks) {
  //   if (map.has(t)) {
  //     let count = map.get(t);
  //     map.set(t, count++);
  //   } else {
  //     map.set(t, 1);
  //   }
  // }

  // map.forEach((count: number, key: string) => {
  //   if (max < count) {
  //     max = count;
  //   }
  // });

  for (let t of tasks) {
    if (map.has(t)) {
      let count = map.get(t);
      // ++count;
      map.set(t, ++count);
    } else {
      map.set(t, 1);
    }

    if (map.get(t) > max) {
      max = map.get(t);
      maxLength = 1;
    } else if (map.get(t) == max) {
      maxLength++;
    }
  }
  console.log(max);
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxLength);
}
