

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if the index already exists
  if (this._storage.get(index)) {
    //get the array already there
    var currentArray = this._storage.get(index);
    //loop through current Array
    for (var i = 0; i < currentArray.length; i++) {
      //if the key val pair is already present
      if (currentArray[i][0] === k) {
        //update the val
        currentArray[i][1] = v;
        this._storage.set(index, currentArray);
        return;
      }
    }
    //otherwise, we haven't the key and push new (k, v) into the array
    currentArray.push([k, v]);
    //push the array with both values back into the storage array at the index
    this._storage.set(index, currentArray);
  //add the index to the storage array, an instance of limited Array if there is no array present
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create new var to hold array at index
  var pairsArray = this._storage.get(index);
  //loop through the array
  for (var i = 0; i < pairsArray.length; i++) {
    //if k matches the current index
    if (pairsArray[i][0] === k) {
      //return the value of the key
      return pairsArray[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get the array at the index - stored at a variable
  var pairsArray = this._storage.get(index);
  //loop through the array
  for (var i = 0; i < pairsArray.length; i++) {
    //if key matches the current iteration
    if (pairsArray[i][0] === k) {
      //delete the (k, v) pair by splicing the array
      pairsArray.splice(i, 1);
      this._storage.set(index, pairsArray);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


