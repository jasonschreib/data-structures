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
      list.tail = newNode;
      for (node in list) {
        var size = _.size(list);
        console.log(size);
        if (node.next === null && size === list.listSize) {
          node.next = newNode;
        }
        list.listSize++;
      }
    }
  };

  list.removeHead = function() {
    var secondItem = list.head.next;
    console.log(secondItem);
    delete list.head;
    list.head = secondItem;
  };

  list.contains = function(target) {
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
 */
