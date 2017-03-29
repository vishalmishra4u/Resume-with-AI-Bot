$(document).ready(function() {
    $('.intro-container').click(function() {
        $('.hobbies-container').animate({
         'margin-left': '60%',
         'margin-top' : '-20.2%'
        });
        $('.portfolio-container').animate({
          'margin-left': '80%',
          'margin-top' : '-20.1%'
        });
    });
});
