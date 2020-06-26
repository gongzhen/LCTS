import LRUNode from "./LRUNode";

class LRUCache {
  head: LRUNode;
  tail: LRUNode;
  capacity: number;
  cache: Map<number, LRUNode>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new LRUNode(-1, -1);
    this.tail = new LRUNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const node = this.cache.get(key);
    // disconnect node
    this.disconnect(node!);
    this.moveToTail(node!);
    return node!.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.cache.set(key, node);
      this.moveToTail(node);
      return;
    }
    const node = new LRUNode(key, value);
    if (this.capacity == this.cache.size) {
      let deleteNode = this.head.next;
      if (deleteNode != null && deleteNode != this.tail) {
        this.disconnect(deleteNode);
        this.cache.delete(deleteNode.key);
      }
    }
    this.cache.set(key, node);
    this.moveToTail(node);
  }

  printCache() {
    console.log("before printCache:");
    this.cache.forEach((value, key, map) => {
      console.log("value:" + value.key + " , key:" + key);
    });
    console.log("after printCache:");
  }

  printFromHead() {
    let ptr = this.head;
    if (ptr === null || ptr.next === this.tail) {
      return "";
    }
    let res = "";
    ptr = ptr.next;
    while (ptr) {
      res = res + "[" + ptr.key + ", " + ptr.value + "]";
      if (ptr.next == this.tail) {
        break;
      }
      ptr = ptr.next;
      res = res + " => ";
    }
    return res;
  }

  private disconnect(node: LRUNode) {
    if (node == null) {
      return;
    }
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  private moveToTail(node: LRUNode) {
    if (node === null) {
      return;
    }
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
  }
}

export default LRUCache;
