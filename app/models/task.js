var Task = function() {
  return {
    create: function() {
      if (this.validate())
        console.log('created');
    },
    validate: function() {
      console.log('validated');
      return true;
    }
  }
};

try {
  module.exports = Task;
} catch(err) {
  console.log('client side');
}

