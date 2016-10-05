$(document).ready(function(){
  var $grid = $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    masonry: {
      // use element for option
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
    }
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
});

