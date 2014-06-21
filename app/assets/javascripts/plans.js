

$(document).ready(function(){
  //this function for facebook send button :
   function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk');
  //comments dropdown menu:

    // var commentvisible = 0;
    // $("#comment-menu").click(function(e){
    //     //This stops the page scrolling to the top on a # link.
    //     e.preventDefault();
    //     if (commentvisible ===0) {
    //         //Search is currently hidden. Slide down and show it.
    //         $("#comment-form").slideDown(200);
    //         $("#s").focus(); //Set focus on the search input field.
    //         commentvisible = 1; //Set search visible flag to visible.
    //     } else {
    //         //Search is currently showing. Slide it back up and hide it.
    //         $("#comment-form").slideUp(200);
    //         commentvisible = 0;
    //     }
    // });






});
