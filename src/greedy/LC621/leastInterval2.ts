// https://www.youtube.com/watch?v=eGf-26OTI-A
export default function leastInterval2(tasks: string[], n: number): number {
  if (tasks === undefined || tasks.length === 0) {
    return 0;
  }

  // AAABBB  n = 2, 2 cooling spaces
  // 1: A _ _ A _ _ A ( 2 colling spcaes _ _ )  maxDividedGroup = 2, n = 2; 2 * 2 = 4
  // idleSlots = 4 spaces.
  //
  // 2: A B _ A B _ A B ( Fill B to the cooling space)
  // for loop; maxDividedGroup = 2

  let charMap = Array(26).fill(0);

  let max = 0;
  for (let t of tasks) {
    let idx = t.charCodeAt(0) - "A".charCodeAt(0);
    charMap[idx]++;
  }
  charMap.sort((n1, n2) => n1 - n2);
  console.log(charMap);
  let maxDividedGroup = charMap[25] - 1; // 2, AB
  let idleSlots = maxDividedGroup * n; // 2 * 2 = 4
  console.log("maxDividedGroup: " + maxDividedGroup);
  console.log("idleSlots: " + idleSlots);
  for (let i = 24; i >= 0; i--) {
    // start from the 24th index of array.
    // B's count is 3, maxDivideGroup is 2. We will need 2 B to fill the idleSlots. so we pick the minium.
    // idleSlots = idleSlots - 2;
    idleSlots -= Math.min(charMap[i], maxDividedGroup);
    if (charMap[i] !== 0) {
      console.log("--> idleSlots: " + idleSlots);
    }
  }
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}
