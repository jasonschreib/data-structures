var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create the new queue object
  var newQueue = {};
  //extend the functions of queueMethods to the new queue object
  _.extend(newQueue, queueMethods);
  //add the storage obj to the instance
  newQueue.storage = {};
  //add totalElements prop that is unique to the new queue - set it to 0
  newQueue.totalElements = 0;
  //add back var prop that keeps track of last element index
  newQueue.back = 0;
  //add frontElement var that starts at 0
  newQueue.frontElem = 0;
  //return the new queue object
  return newQueue;
};

var queueMethods = {};
//add the shared methods of the queue to the object: enqueue, dequeue, size
queueMethods.enqueue = function(value) {
  //the key to add is the back var
  this.storage[this.back] = value;
  //increase the back var by 1
  this.back++;
  //increase the totalElements by one
  this.totalElements++;
};
queueMethods.dequeue = function() {
  //remove the element at the front
  //create variable for element to be returned
  //var dequeued = this[JSON.stringify(this.frontElem)];
  var dequeued = this.storage[this.frontElem];
  //delete the current front
  delete this.storage[this.frontElement];
  //increase the frontElem variable by 1
  this.frontElem++;
  //decrease the totalElements var
  this.totalElements--;
  //if the totalElements goes less than 0
  if (this.totalElements < 0) {
    //then set it to 0
    this.totalElements = 0;
  }
  //return the element
  return dequeued;
};
queueMethods.size = function() {
  //return the totalElements property
  return this.totalElements;
};
