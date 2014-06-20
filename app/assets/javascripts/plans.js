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

// $(document).ready(function(){
//    // this function will add the plan to
//   $('#add').on('click', function(e){
//     e.preventDefault();
//     var plan = $('#weekendplan').val();
//     //console.log(todo);
//     $('.planList').append('<ul><span class="todo_label">' + plan + '</span></ul>' );
//     $('#weekendplan').val(" ");

//   });


//    //this function will show and hide the new link form when clicked
//    $("#displayText").on("click",function toggle(){
//               var ele = document.getElementById("new_link");
//                 var text = document.getElementById("displayText");
//                 if(ele.style.display == "block"){
//                     ele.style.display = "none";
//                     text.innerHTML = "Add A Link";
//                 }
//                 else {
//                     ele.style.display = "block";
//                     text.innerHTML = "Hide Form";
//                 }

//         });
// });
