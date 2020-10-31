

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = Node(node);
  newNode.edges = [];
  this.storage.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {

    //Loop through each node's edges array
    for (var j = 0; j < this.storage[i].edges.length; j++) {
      var index = _.indexOf(this.storage[i].edges, node);
      //if the edges array contains the node
      if (index > -1) {
        //remove the node
        this.storage[i].edges.splice(index, 1);
      }
    }
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      if (_.indexOf(this.storage[i].edges, toNode) > -1) {
        return true;
      }
    }
    if (this.storage[i].value === toNode) {
      if (_.indexOf(this.storage[i].edges, fromNode) > -1) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    console.log(this.storage[i].value);
    if (this.storage[i].value === fromNode) {
      this.storage[i].edges.push(toNode);
    }
    if (this.storage[i].value === toNode) {
      this.storage[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      var index = _.indexOf(this.storage[i].edges, toNode);
      if (index > -1) {
        this.storage[i].edges.splice(index, 1);
      }
    } else if (this.storage[i].value === toNode) {
      var index = _.indexOf(this.storage[i].edges, fromNode);
      if (index > -1) {
        this.storage[i].edges.splice(index, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .addNode = constant time
 * .contains = linear
 * .removeNode = O(n^2)
 * .hasEdge = linear
 * .addEdge = linear
 * .removeEdge = linear
 * .forEachNode = linear
 */


