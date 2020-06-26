class LRUNode {
  public next: LRUNode;
  public prev: LRUNode;
  public key: number;
  public value: number;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default LRUNode;
