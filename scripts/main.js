var Task = null;
requirejs(["models/task"], function(task) {
  Task = task;

  a = new Task();
});

// Distinguish
//if (module && module.exports) { 
 // module.exports = ... 
//} else if (define) { 
  // support AMD 
//} else if (window) { 
  //       window.nameThing = ... 
//} 
