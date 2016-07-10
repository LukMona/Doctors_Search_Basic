document.addEventListener("DOMContentLoaded", function(){

  function stopPageReload(){
    $( document ).ready(function() {
       $("#contactForm").submit(function( event ){
           event.preventDefault();
           $.ajax({
               url: 'send.php',
               data: $("#contactForm").serialize(),
               type: 'POST',
               success: function( data ){
                   $(".btn").html('<div style="background-color: green; padding: 5px; width: 100%; border-radius: 5px; color: white; "> We have received your request. Expect a feedback shortly.</div><br />');

               }
           });
       });
    });
  }

  stopPageReload();

});
