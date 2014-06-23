
$(document).ready(function(){
   $('.add_comment').on('click', function(e){
      var me = $(e.target);
      e.preventDefault();

      var form = me.closest('form');

      var plan_id = form.find(':input[name="plan_id"]').val();
      var comment = form.find(':input[name="comment"]').val();
       console.log(plan_id)
       console.log(comment)
      $.ajax({
            url: "/plans/" + plan_id + "/comments",
            type: "post",
            data: {
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