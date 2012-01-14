define(function(require) {
  return function(){
    this.create = function() {
      if (this.validate())
        console.log('created');
    }

    this.validate =  function() {
      console.log('validated');
      return true;
    }
  }
});


