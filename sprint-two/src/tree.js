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
  //recursively iterate through the tree
  //initiate the recursion when tree is undefined
  if (tree === undefined) {
    if (this.value === target) {
      return true;
    } else {
      tree = this.children;
    }
  }

  //loop over array and check the vals
  for (var i = 0; i < tree.length; i++) {
    if (tree[i].value === target) {
      return true;
    }
    if (tree[i].children.length > 0) {
      for (j = 0; j < tree[i].children.length; j++) {
        if (tree[i].children[j].value === target) {
          return true;
        } else if (tree[i].children[j].children > 0) {
          return this.contains(target, tree[i].children[j].children);
        }
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
