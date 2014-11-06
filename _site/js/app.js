function activateImage(){
  var images = $('.responsive-image');
  $.each(images, function(index, val) {
     $string = $('.responsive-image').attr('data-src');
     $(this).attr('src', $string);
  });
};

$(document).ready(function(){
  // $string = $('.responsive-image').attr('data-src');
    if (window.matchMedia("(min-width: 45em)").matches) {
      activateImage();
    }
});
