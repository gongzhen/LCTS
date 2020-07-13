function shipWithinDays(weights: number[], D: number): number {
  if (weights === undefined || weights.length === 0) {
    return 0;
  }

  let max = getMax(weights);
  let sum = getSum(weights);

  while (max < sum) {
    let mid = (max + sum) >> 1;
    let requiredDays = getDayForWeights(weights, mid);
    if (requiredDays > D) {
      max = mid + 1;
    } else {
      sum = mid;
    }
  }
  // max == sum
  return max;
}

function getDayForWeights(weights: number[], maxWeight: number): number {
  let requiredDays = 1;
  let currentWeight = 0;
  for (let idx = 0; idx < weights.length; idx++) {
    currentWeight += weights[idx];
    if (currentWeight > maxWeight) {
      requiredDays++;
      currentWeight = weights[idx];
    }
  }
  return requiredDays;
}

function getMax(weights: number[]): number {
  return weights.reduce(function (prev, curr) {
    return prev < curr ? curr : prev;
  });
}

function getSum(weights: number[]): number {
  return weights.reduce(function (sum, curr) {
    return sum + curr;
  }, 0);
}

export default shipWithinDays;
