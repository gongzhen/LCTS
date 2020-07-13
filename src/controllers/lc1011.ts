import { Request, Response } from "express";
import shipWithinDays from "../LC1011/shipWithinDays";

export const lc1011ts = (req: Request, res: Response) => {
  let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let D = 5;
  let res1 = shipWithinDays(weights, D);
  let output = "result1 is " + res1;
  weights = [3, 2, 2, 4, 1, 4];
  D = 3;
  res1 = shipWithinDays(weights, D);
  output = output + ", result2 is " + res1;
  weights = [1, 2, 3, 1, 1];
  D = 4;
  res1 = shipWithinDays(weights, D);
  output = output + ", result3 is " + res1;
  res.send(output);
};
