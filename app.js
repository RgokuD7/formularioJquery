var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function () {
  $("#enviar").click(function () {
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var asunto = $("#asunto").val();

    console.log(nombre, email, asunto);

    if (nombre == "") {
      $("#menNom").fadeIn();
      return false;
    } else {
      $("#menNom").fadeOut();
      if (email == "" || !expr.test(email)) {
        $("#menEmail").fadeIn();
        return false;
      } else {
        $("#menEmail").fadeOut();
        if (asunto == "") {
          $("#menAsunto").fadeIn();
          return false;
        }
      }
    }
  });
});
