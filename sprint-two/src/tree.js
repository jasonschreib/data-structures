var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = []; //fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create newTree with val set to value
  var newTree = Tree(value);
  //add the newTree to the tree by adding to tree.children array
  this.children.push(newTree);
};

treeMethods.contains = function(target, tree) {
  // check if tree is undefined
  if (tree === undefined) {
    result = false;
    if (this.value === target) {
      result = true;
    }
    // loop over this.children with _.each
    for (var i = 0; i < this.children.length; i++) {
      // if current value === the target
      if (this.children[i].value === target) {
        // return true
        result = true;
      } else if (this.children[i].children.length > 0) {
        this.contains(target, this.children[i]);
      }
    }
    // return false
    return result;
  } else {
    // if tree is not undefined
    // loop over tree.chilren with _.each
    for (var i = 0; i < tree.children.length; i++) {
      // if current value === the target
      if (tree.children[i].value === target) {
        result = true;
      } else if (tree.children[i].children.length > 0) {
        tree.contains(target, tree.children[i]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .addChild = O(1) - constant
 * .contains = O(n) - linear
 */
