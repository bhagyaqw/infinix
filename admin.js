define(['jquery', 'humane'], function($, humane) {
  console.log('Loading admin page.');

  /
      $.ajax({
        url: '/admin/users/' + user,
        type: 'DELETE',
        success: function(result) {
          console.log(result);
        }
      });
    }
  });

  // Manage quota prompt
  $('.quota-btn').click(function() {
    var currentQuota = $(this).data('quota');
    var newQuota = prompt('Manage User Disk Quota (bytes):', currentQuota);
    var user = $(this).data('user');
    if (!newQuota) {
      return false;
    }
    $.ajax({
      url: '/admin/users/' + user,
      type: 'PUT',
      data: { newQuota: newQuota },
      success: function(result) {
        humane.log(result);
      }
    });
  });
});
