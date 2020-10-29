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
  //check to see if tree is an array
  if (Array.isArray(tree)) {
    debugger;
    //loop over array and check the vals
    for (var i = 0; i < tree.length; i++) {
      if (tree[i].value === target) {
        console.log(tree[i].value, target);
        return true;
      }
      if (tree[i].children.length > 0) {
        return this.contains(target, tree[i].children);
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
