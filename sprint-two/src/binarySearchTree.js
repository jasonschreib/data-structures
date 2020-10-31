var BinarySearchTree = function(value) {
  var tree = Object.create(sharedMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};


var sharedMethods = {};

sharedMethods.insert = function(value, tree) {
  //Find the tree that has an empty left or right
  if (tree === undefined) {
    tree = this;
  }
  //case both empty
  if (tree.left === null && tree.right === null) {
    if (value < tree.value) {
      tree.left = BinarySearchTree(value);
      return;
    } else if (value > tree.value) {
      tree.right = BinarySearchTree(value);
      return;
    }
  }
  //case empty left
  if (tree.left === null && value < tree.value) {
    tree.left = BinarySearchTree(value);
    return;
  }
  //case empty right
  if (tree.right === null && value > tree.value) {
    tree.right = BinarySearchTree(value);
    return;
  }
  //check if tree.left or tree.right is null before recursing
  if (tree.left && value < tree.value) {
    tree.insert(value, tree.left);
  }
  if (tree.right && value > tree.value) {
    tree.insert(value, tree.right);
  }

};

sharedMethods.contains = function(value, tree) {
  if (tree === undefined) {
    tree = this;
  }
  //add variable to track if it's found
  var result = false;
  //Check if the value's in current tree
  if (tree.value === value) {
    return true;
  } else if (tree.left && value < tree.value) { //recurse to the left
    return tree.contains(value, tree.left);
  } else if (tree.right) {
    return tree.contains(value, tree.right);
  }

  return result;
};

sharedMethods.depthFirstLog = function(callback, tree) {
  if (tree === undefined) {
    tree = this;
  }
  //Base Case: while tree.left && tree.right are not null
  //call callback on current tree value
  callback(tree.value);
  //call callback on tree.left
  if (tree.left) {
    tree.depthFirstLog(callback, tree.left);
  }
  //call callback on tree.right
  if (tree.right) {
    tree.depthFirstLog(callback, tree.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert = O(log n)
 * .contains = O(log n)
 * .depthFirstLog = O(n)
 */

