$(document).ready(function(){
  var peli= new Movie();
  peli.set('name','Hansel and Gretel');
  $('#play').on('click', function(){
  	 $('#message').html(peli.play())
  	 $('#stop').removeAttr("disabled");
  });
  $('#stop').on('click', function(){
    $('#message').html(peli.stop())
    $('#stop').attr("disabled","disabled");
  });
});