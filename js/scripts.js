function PingPong(input) {
  this.input = input;
  this.outputArray = [];
};

PingPong.prototype = {
  validateInput : function() {
    return ! /[^\d]/.test(this.input);
  },
  generate : function() {
    for (let i = 1; i <= this.input; i++){
      let string = '';
      if (!(i % 3)) string += 'Ping';
      if (!(i % 5)) string += 'Pong';
      this.outputArray.push(string || i);
    }
    return this.outputArray; //could have been interesting to return `this` and define a toString method
  }
};

$(document).ready(function() {
  $('form').submit(function() {
    let ping = new PingPong($('input').val());
    if (ping.validateInput()) {
      $('#output ul').empty();
      $.each(ping.generate(), function(idx, value) {
        $('<li>').text(value).appendTo('#output ul');
      });
    };
    return false
  });
});