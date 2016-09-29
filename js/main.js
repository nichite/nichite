$(document).ready(function() {

  // Send user to relevant git repo if card clicked
  $('.project-container').on('click',function(){

    // Grab the project name from html attribute
    var project = $(this).attr("project");

    // Open a new tab
    var win = window.open("https://github.com/nichite/" + project, '_blank');
    win.focus();

  });

});
