var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //create num var that keeps track of how many items are in obj
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //add the element to the object at count + 1
    var key = JSON.stringify(count + 1);
    storage[key] = value;
    //increment the count by one
    count++;
  };

  someInstance.pop = function() {
    //set element at the top to popped var
    var popped = storage[JSON.stringify(count)];
    //remove the element from the obj
    delete storage[JSON.stringify(count)];
    //decrement the count by one
    count--;
    //edge case if stack size reaches below or at zero
    if (count <= 0) {
      count = 0;
    }
    //return the popped var
    return popped;
  };

  someInstance.size = function() {
    //return the count var
    return count;
  };

  return someInstance;
};
