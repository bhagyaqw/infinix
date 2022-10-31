define(['jquery'], function($) {
  console.log('Loading footer.');

  var $footerLink = $('#footer a');
  switch (location.pathname) {

  
    case '/settings':
      $('#settings').addClass('active');
      break;
  }

});
