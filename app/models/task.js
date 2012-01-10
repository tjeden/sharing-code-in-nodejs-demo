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

try {
  module.exports = Task;
} catch(err) {
  console.log('client side');
}

