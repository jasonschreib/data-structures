var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create unique props for the queue
  this.storage = {};
  this.totalElements = 0;
  this.front = 0;
  this.back = 0;
};

//add the queue functions to Queue's prototype
Queue.prototype.enqueue = function(value) {
  //add the value to the back of the queue
  this.storage[this.back] = value;
  //increase the back prop
  this.back++;
  //increase the totalElements prop
  this.totalElements++;
};

Queue.prototype.dequeue = function() {
  //create var for the element to be removed
  var toDequeue = this.storage[this.front];
  //remove the value at the front of the queue
  delete this.storage[this.front];
  //increase the front prop of the object instance
  this.front++;
  //decrease the totalElements
  this.totalElements--;
  //check if the totalElements is below zero
  //if it is
  if (this.totalElements < 0) {
    //then set it equal to zero
    this.totalElements = 0;
  }
  //return the value that was at the front of the queue
  return toDequeue;
};

Queue.prototype.size = function() {
  //return the totalElements prop of the object instance
  return this.totalElements;
};


