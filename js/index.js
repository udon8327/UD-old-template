//gotop
$(function(){
  $('#gotop').click(function(){
    $('html,body').animate({scrollTop: 0}, 400);
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $('#gotop').fadeIn('fast');
    }
    else{
      $('#gotop').stop().fadeOut('fast');
    }
  });
})

//popup
function popupOpen(){
  $('body').prepend($('#popup').html());

  //jquery-validate  
  //自定驗證正則表達式
  $.validator.addMethod("regex", function(value, element, param) {
    return value.match(new RegExp("^" + param + "$"));
  });

  $("#formValidate").validate({
    //debug模式(不送出只驗證)
    //debug: true,

    //預設行為
    // submitHandler: function(form) {
    //   if (confirm('確定要送出嗎?')) {
    //     form.submit();
    //   }
    // },

    //驗證規則
    rules: {
      name : {
        required: true,
        regex   : "[a-zA-Z0-9_ \\u4e00-\\u9fa5]+"
      },
      mobile: {
        required: true,
        regex   : "09\\d{8}"
      },
      email: {
        required: true,
        email: true
      }
    },

    //錯誤訊息
    messages: {
      name : {
        required: '姓名不可為空',
        regex   : '不可輸入符號'
      },
      mobile : {
        required: '電話不可為空',
        regex   : '需前2碼為\"09\"的10位數字'
      },
      email: {
        required: 'Email不可為空',
        email: '需符合Email格式且包含\"@\"'
      }
    }

  });

  //bootstrap上傳文件名
  bsCustomFileInput.init();

  //$('body,html').addClass('overflow-hidden');
}

function popupClose(that){
  that.closest('.popupContent').addClass('bounceOut');
  setTimeout(function(){that.closest('.popup').remove();},400);
  //$('body,html').removeClass('overflow-hidden');
}