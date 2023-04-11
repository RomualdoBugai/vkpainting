$("#submit-contact").click(function (event) {

    $('#error-message').attr('hidden', true);
    $('#succes-message').attr('hidden', true);

    var formData = {
       name: $("#name").val(),
       email: $("#email").val(),
       message: $("#message").val(),
    };

    $.ajax({
       url: "assets/mail.php",
       method: "POST",
       data: formData,
       encode: true,
    }).done(function (response) {
       $('#succes-message').attr('hidden', false);
       $('#succes-message').text(response);
    }).fail(function (jqXHR, textStatus) {
       $('#error-message').attr('hidden', false);
       $('#error-message').text(jqXHR.responseText);
    });
   
 });