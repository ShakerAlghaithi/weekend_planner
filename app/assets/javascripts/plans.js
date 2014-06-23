
 $(document).ready(function(){

   $(function() {
        likebutton =
            '<fb:like href="" send="" width="100" show_faces="" ' +
            'font="" layout="button_count" action="recommend">' +
            '</fb:like>';
        $.getScript('http://connect.facebook.net/en_US/all.js', function() {
                FB.init({appId: 141936272547391,
                            status: true,
                            cookie: true,
                            xfbml: true
                            });
                $('#facebook').replaceWith(likebutton);
        });
    });


     //get the search term from the input field when user enter it
  $("#eventSearch").on("submit", function(e) {
       e.preventDefault();
       userInput = $("#searchTerm").val();
       alert(userInput);
       var response = $.ajax({
           url: 'https://www.eventbriteapi.com',
           type: 'get',
           dataType: 'json',
           data: {param1: 'value1'},
       })

       });

   });
});
