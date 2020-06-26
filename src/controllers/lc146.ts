import { Request, Response } from "express";
import LRUCache from "../LC146/LRUCache";

let LRUCacheJS = require("../LC146/LRUCacheJS");

export const lc146ts = (req: Request, res: Response) => {
  const cache: LRUCache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  let res1 = cache.get(1); // returns 1=
  cache.put(3, 3); // evicts key 2
  cache.get(2); // returns -1 (not found)
  res1 = cache.get(3); // returns 3.
  cache.put(4, 4); // evicts key 1.
  res1 = cache.get(1); // returns -1 (not found)
  res1 = cache.get(3); // returns 3
  res1 = cache.get(4); // returns 4
  cache.put(1, 1);
  let output = cache.printFromHead();
  res.send(output);
};

export const lc146js = (req: Request, res: Response) => {
  const lruCacheJS = new LRUCacheJS(2);
  lruCacheJS.put(1, 1); // 1, 1
  lruCacheJS.put(2, 2); // 1, 1 => 2, 2
  lruCacheJS.put(3, 3);
  lruCacheJS.get(2);
  lruCacheJS.get(3);
  let output = lruCacheJS.printFromHead();
  console.log("output:" + output);
  lruCacheJS.put(4, 4);
  output = lruCacheJS.get(1);
  lruCacheJS.put(5, 5);
  lruCacheJS.put(5, 6);
  lruCacheJS.put(5, 7);
  lruCacheJS.put(1, 1);
  console.log("output:" + output);
  output = "output:" + output;
  res.send(output);
};
