 $(document).ready(function(){
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
