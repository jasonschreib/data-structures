var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create the instance of the queue
  var queueInstance = Object.create(queueMethods);
  //add the necessary vars / props of the instance
  queueInstance.storage = {};
  queueInstance.front = 0;
  queueInstance.back = 0;
  queueInstance.totalElements = 0;
  //return the instance of the queue
  return queueInstance;
};

var queueMethods = {};
//add the enqueue, dequeue, and size methods to the queueMethods object
queueMethods.enqueue = function(value) {
  //add the value to the back of the queue
  this.storage[this.back] = value;
  //increment the back prop by one
  this.back++;
  //increment the totalElements prop by 1
  this.totalElements++;
};
queueMethods.dequeue = function() {
  //set variable set to the item at front which we will remove
  var dequeued = this.storage[this.front];
  //remove the item at the front
  delete this.storage[this.front];
  //increase the front prop of the queue
  this.front++;
  //decrease the totalElements by one
  this.totalElements--;
  //check if the val of the totalElements is less than zero
  //if it is
  if (this.totalElements < 0) {
    //then set it equal to zero
    this.totalElements = 0;
  }
  //return the var of the original front item
  return dequeued;
};
queueMethods.size = function() {
  //return the total elements property of the queue
  return this.totalElements;
};

