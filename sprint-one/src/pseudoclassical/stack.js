var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create the uniq props for the stack instance
  this.storage = {};
  this.count = 0;
};

//add the stack methods to the prototype
Stack.prototype.push = function(value) {
  //add the value to the back of the stack
  this.storage[this.count + 1] = value;
  //increment the count property of the stack obj
  this.count++;
};

Stack.prototype.pop = function() {
  //set var for the val we want to remove
  var popped = this.storage[this.count];
  //remove the value from the back of the stack
  delete this.storage[this.count];
  //decrement the count property of the stack obj
  this.count--;
  //check if the count property goes below zero
  //if it does
  if (this.count < 0) {
    //then set the count property to zero
    this.count = 0;
  }
  //return the var of the val that we want to be removed
  return popped;
};

Stack.prototype.size = function() {
  //return the count prop of the stack obj
  return this.count;
};
