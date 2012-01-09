var Task = function() {
  return {
    create: function() {
      console.log('created');
    },
    validate: function() {
      console.log('validated');
    }
  }
};

module.exports = Task;
