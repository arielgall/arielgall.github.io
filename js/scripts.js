// Everything OK?
console.log('OK');

// Light Gallery

// Controls for Views
$('#grid').click( function(){
  
    // Remove List
  $('main').removeClass('list');
  
  $('main').addClass('grid');
  // console.log('Grid Click');

});

$('#list').click( function(){
  
  // Remove Grid
  $('main').removeClass('grid');
  
  $('main').addClass('list');
  // console.log('List Click');
  
});