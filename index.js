// Function to iterate over a collection
function myEach(collection, callback) {
    // Check if the collection is an array or object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Iterate over each element
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
    return collection; // Return the original collection
  }
  
  // Function to create a new array with results from the callback
  function myMap(collection, callback) {
    const results = [];
    myEach(collection, (element) => {
      results.push(callback(element));
    });
    return results; // Return the new array
  }
  
  // Function to reduce a collection to a single value
  function myReduce(collection, callback, accumulator) {
    // Initialize the accumulator based on input or first value of collection
    let acc = accumulator;
  
    // Determine if the collection is an array or an object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Start the index for the iteration
    let startIndex = 0;
  
    // If no accumulator is provided, use the first value as the accumulator
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1; // Start from the second element
    }
  
    // Iterate over the collection values
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  
    return acc; // Return the final accumulated value
  }
  
  // Function to find an element in a collection
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined; // Return undefined if not found
  }
  
  // Function to filter a collection based on a predicate
  function myFilter(collection, predicate) {
    const results = [];
    myEach(collection, (element) => {
      if (predicate(element)) {
        results.push(element);
      }
    });
    return results; // Return the filtered array
  }
  
  // Function to get the size of a collection
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Function to get the first element(s) of a collection
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0]; // Return the first element
    }
    return collection.slice(0, n); // Return the first n elements
  }
  
  // Function to get the last element(s) of a collection
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1]; // Return the last element
    }
    return collection.slice(-n); // Return the last n elements
  }
  
  // Function to get the keys of an object
  function myKeys(object) {
    return Object.keys(object); // Return array of keys
  }
  
  // Function to get the values of an object
  function myValues(object) {
    return Object.values(object); // Return array of values
  }
  
  // Export functions for testing
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  