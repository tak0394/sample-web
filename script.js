$(document).ready(function(){
    
      $(function(){
        
        $(function() {
            $('#login-show').click(function(){　　//←モーダルを開くイベント
              $('.modal').fadeIn();
            });
            $('.close-modal').click(function(){　　//←モーダルを閉じるイベント
              $('.modal').fadeOut();
            });
          });



          $('.faq-list-item').click(function() {
            var $answer = $(this).find('.answer');
        
            if($answer.hasClass('open')) { 
              $answer.removeClass('open');
              $answer.slideUp();
              $(this).find('span').text('+');
        
            } else {
              $answer.addClass('open'); 
              $answer.slideDown();
              $(this).find('span').text('-');
            }
          });
        });



      });
