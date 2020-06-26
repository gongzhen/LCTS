var LRUCacheJS = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.linkedList = new DoublyLinkedListJS();
};

LRUCacheJS.prototype.get = function(key) {
  // console.log("this.map.has:" + key + " = " + this.map.has(key));
  // this.map.forEach((value, key) => {
  //   console.log("[key:" + key + "]:" + value.value);
  // });
  if (this.map.has(key) === false) {
    return -1;
  }
  const moveToLast = this.map.get(key);
  this.linkedList.removeFromList(moveToLast);
  this.linkedList.append(moveToLast);
  return moveToLast.value;
};

LRUCacheJS.prototype.put = function(key, value) {
  if (this.capacity == 0) {
    return;
  }  
  if (this.get(key) != -1) {
    const node = this.map.get(key);
    node.value = value;
    this.map.set(key, node);
    let output = this.linkedList.printFromHead();
    // console.log("output:" + output);  
    // console.log("map size: " + this.map.size + ",this.capacity: " + this.capacity);    
    return;
  }

  const node = new ListNodeJS(key, value);
  if (this.capacity === this.map.size) {
    const firstNode = this.linkedList.getFirst();
    const firstNodeKey = firstNode.key;
    this.linkedList.removeFromList(firstNode);
    // console.log("before delete map size: " + this.map.size + " first:" + this.linkedList.getFirst().key);
    this.map.delete(firstNodeKey);
    // console.log("after delete map size: " + this.map.size);    
  }  
  this.map.set(key, node);
  this.linkedList.append(node);
  this.linkedList.printFromHead();
  let output = this.linkedList.printFromHead();
  // console.log("output:" + output);  
  // console.log("map size: " + this.map.size + ",this.capacity: " + this.capacity);
};

LRUCacheJS.prototype.printFromHead = function() {
  return this.linkedList.printFromHead();
}

function ListNodeJS(key = null, value = null) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
};

// internal class
function DoublyLinkedListJS() {
  this.head = new ListNodeJS(-1, -1);
  this.tail = new ListNodeJS(-1, -1);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

DoublyLinkedListJS.prototype.append = function(lastNode) {
  const prevLastNode = this.tail.prev;
  prevLastNode.next = lastNode;
  lastNode.prev = prevLastNode;
  lastNode.next = this.tail;
  this.tail.prev = lastNode;
};

DoublyLinkedListJS.prototype.removeFromList = function(node) {
  if (node === null || node === undefined) {
    return;
  }
  // console.log("node.key:" + node.key);
  // console.log("node.prev:" + node.prev.key);
  // console.log("node.next:" + node.next.key);
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.next = null;
  node.prev = null;
};

DoublyLinkedListJS.prototype.printFromHead = function() {
  let ptr = this.head;
  if (ptr === null) {
    return "";
  }
  let res = ""
  while(ptr) {
    res = res + '[' + ptr.key + ', ' + ptr.value + ']';
    ptr = ptr.next;
    if (ptr === null) {
      break;
    }
    res = res + ' => '
  }
  return res;
};

DoublyLinkedListJS.prototype.getFirst = function() {
  return this.head.next;
}

DoublyLinkedListJS.prototype.getLast = function() {
  return this.tail.prev;
}

module.exports = LRUCacheJS;
