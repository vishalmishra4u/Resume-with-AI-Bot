$(document).ready(function() {
    $('.intro-container').click(function() {
        $('.hobbies-container').animate({
         'margin-left': '60%',
         'margin-top' : '-19.8%'
        });
        $('.portfolio-container').animate({
          'margin-left': '80%',
          'margin-top' : '-19.8%'
        });
    });
});
