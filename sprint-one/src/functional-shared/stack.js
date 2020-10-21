var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create the new instance
  var newStack = {};
  //extend the functions from the stackMethods object
  _.extend(newStack, stackMethods);
  //add count prop - unique for each stack
  newStack.count = 0;
  //return the new instance
  return newStack;
};

var stackMethods = {};
//add the shared methods among all stacks: push, pop, and size
stackMethods['push'] = function(value) {
  //add the value to the stack at val count + 1
  this[JSON.stringify(this.count + 1)] = value;
  //increment the count
  this.count++;
};
stackMethods['pop'] = function() {
  //create var for the element to be popped
  var popped = this[JSON.stringify(this.count)];
  //remove the popped element
  delete this[JSON.stringify(this.count)];
  //decrement the count var
  this.count--;
  //if the count goes below zero
  if (this.count < 0) {
    //set count equal to zero
    this.count = 0;
  }
  //return the element to be popped
  return popped;
};
stackMethods['size'] = function() {
  //return the count prop for the current stack
  return this.count;
};


