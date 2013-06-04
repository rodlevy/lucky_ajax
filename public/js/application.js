$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  $('form').on('submit', function(event){
    event.preventDefault();
    var randomnumber = Math.floor(Math.random()*6 +1);
    console.log(randomnumber);
    $.post('/rolls', {"value": randomnumber}, function(data){
       console.log(data);

      die_location = $('.container').find('#die').html(); 
       // console.log(die_location);
      $('#die').html(data);

    });
  });
});
