document.addEventListener("DOMContentLoaded", function(){

  function stopPageReload(){

    $("#contactForm").submit(function(event){
      //stop page reload
      event.preventDefault();

      //send contact form data to the php send file
      $.ajax({
        url: 'send.php',
        data: $("#contactForm").serialize(),
        type: 'POST',
        success: function(data){
          $(".btn").html('<div style="background-color: green; padding: 5px; width: 100%; border-radius: 5px; color: white; "> We have received your request. Expect a feedback shortly.</div><br />');
        }
      });
    });
  }

  stopPageReload();

});
