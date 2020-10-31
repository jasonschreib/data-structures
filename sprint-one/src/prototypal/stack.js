var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create the instance of the stack
  var stackInstance = Object.create(stackMethods);
  //add any unique vars / props to the instance
  stackInstance.count = 0;
  //add the storage obj to the instance
  stackInstance.storage = {};
  //return the instance
  return stackInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  //add the element to the back of the stack
  this.storage[this.count + 1] = value;
  //increment the count by one
  this.count++;
};

stackMethods.pop = function() {
  //create a var for the popped element
  var popped = this.storage[this.count];
  //remove the element from the back
  delete this.storage[this.count];
  //decrement count by one
  this.count--;
  //if the count goes less than zero
  if (this.count < 0) {
    //then set the count to zero
    this.count = 0;
  }
  //return the popped element
  return popped;
};

stackMethods.size = function() {
  //return the count of the instance
  return this.count;
};

