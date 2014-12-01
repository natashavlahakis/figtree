// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Hack to get off-canvas .menu-icon to fire on iOS
$('.menu-icon').click(function(){ false });

// Masonry
$('#masonryContainer').masonry({  
  itemSelector: '.masonry-brick',
  columnWidth: 480
});    