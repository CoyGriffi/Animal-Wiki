// $(document).ready(function() {
//   $("#animal").change(function(event) {
//     event.preventDefault();
    
//     let animals = parseInt($("#animal").val());
    
//     if (animals === 1 ) {
//       $(".corgi").show();
//     } else if (animals === 2) {
//       $(".cat").show();
//     } else if (animals === 3) {
//       $(".raccoon").show();
//     }
//     $("body").removeClass();
//   });
// });


$(document).ready(function() {
  $("#animal").change(function(event) {
    event.preventDefault();
    
    let animals = parseInt($("#animal").val());
    
    if (animals === 1 ) {
      $("#cat, #raccoon").hide();
      $("#corgi").show();
    } else if (animals === 2) {
      $("#corgi, #raccoon").hide();
      $("#cat").show();
    } else if (animals === 3) {
      $("#cat, #corgi").hide();
      $("#raccoon").show();
    } else if (animals === 0) {
      $("#cat, #corgi, #raccoon").hide();
    }
  });
});