
$(document).ready(function(){
   $('.add_comment').on('click', function(e){
      var me = $(e.target); //  storing the event for the target to use it for the ajax
      e.preventDefault();
      var form = me.closest('form');  // get the first element that matches the selector
      var plan_id = form.find(':input[name="plan_id"]').val();  //find and store the plan-id (A DOM element within which a matching element may be found)
      var comment = form.find(':input[name="comment"]').val();  //find the comment that belongs to the plan with the planID above

       //save the data into the database
      $.ajax({
            url: "/plans/" + plan_id + "/comments",
            type: "post",
            data: {
              //verify and retrieve CSRF(Cross Site Request Forgery). token authenticity
              authenticity_token: $('meta[name=csrf-token]').attr('content'),
              "comment": {"text": comment}
            },
            dataType: "json",
            success: function(data){
              var li = ('<li>' + comment + '</li>');
              $('#modal_comments_list_' + plan_id).append(li);
            },
            error: function(){
              debugger;
              console.log("No comments ");
            }
      });
  });
});