var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //create totalElements var
  var totalElements = 0;
  //create back var
  var back = 0;
  //create front var
  var frontElem = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = JSON.stringify(back + 1);
    //add element to back of queue
    storage[key] = value;
    //update the back var
    back++;
    //update the totalCount var
    totalElements++;
  };

  someInstance.dequeue = function() {
    //create var for the element to be dequeued
    var toDequeue = storage[JSON.stringify(frontElem)];
    //remove the current front element by deleting it
    delete storage[JSON.stringify(frontElem)];
    //increase frontElem by one
    frontElem++;
    //decrement totalElements by one
    totalElements--;
    //if the count is less than or equal to zero
    if (totalElements <= 0) {
      //then count is zero
      totalElements = 0;
    }
    //return the dequeued element
    return toDequeue;
  };

  someInstance.size = function() {
    //return the totalElements var
    return totalElements;
  };

  return someInstance;
};
