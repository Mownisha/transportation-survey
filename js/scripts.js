$(document).ready(function() {
  $("form#transportation-survey").submit(function(event) {
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var trans=$(this).val();
      $('#work-responses').append(trans+"<br>");
    });

    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });

    $('#transportation-survey').hide();
  });
});
