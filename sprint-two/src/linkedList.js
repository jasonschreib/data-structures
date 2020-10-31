var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.listSize = 0;

  list.addToTail = function(value) {
    var newNode = Node(value);
    //if list is empty, set list.head & list.tail to this
    if (!list.head && !list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;

    }
  };

  list.removeHead = function() {
    var secondItem = list.head.next;
    var oldHead = list.head.value;
    delete list.head;
    list.head = secondItem;
    return oldHead;
  };

  list.contains = function(target, node) {
    if (node === undefined) {
      return list.contains(target, list.head);
    }
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }

    return list.contains(target, node.next);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Add to tail = O(1)
 * Remove Head = O(1)
 * Contains = O(n)
 */