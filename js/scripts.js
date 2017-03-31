function pingPong(input) {
  let this.inputString = input;
  let this.outputArray = [];

  let validateInput = function() {
    return ! /[^\d]/.test(this.input);
  }

  let generate = function() {
    for (let i = 0; i <= number; i++){
      let string = '';
      if (!(i % 3)) string += 'Ping';
      if (!(i % 5)) string += 'Pong';
      this.outputArray.push(string || i);
    }
    return outputArray; //could have been interesting to return `this` and define a toString method
  }
} 

$(document).ready(function() {
  $('form').submit(function() {
    let ping = new PingPong($('input').val());
    if (ping.validateInput()) {
      $('#output ul').empty();
      $.each(ping.generate(), function(value) {
        $('<li>').text(value).appendTo('#output ul');
      });
    }
    return false
  });
});