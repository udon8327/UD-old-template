//gotop
$(function () {
  $('#gotop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 400);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#gotop').fadeIn('fast');
    } else {
      $('#gotop')
        .stop()
        .fadeOut('fast');
    }
  });
})

//modalOpen
function modalOpen() {
  $('body').prepend($('#modal>.modal').clone(true));

  //jquery-validate 
  //自定驗證正則表達式
  $.validator.addMethod("regex", function (value, element, param) {
    return value.match(new RegExp("^" + param + "$"));
  });
  $("#formValidate").validate({
    //debug模式(不送出只驗證) 
    // debug: true, 

    //預設行為 
    // submitHandler: function(form){
    //   if(confirm('確定要送出嗎?')){
    //     form.submit();}
    //   },

    //驗證規則
    rules: {
      name: {
        required: true,
        regex: "[a-zA-Z0-9_ \\u4e00-\\u9fa5]+"
      },
      mobile: {
        required: true,
        regex: "09\\d{8}"
      },
      email: {
        required: true,
        email: true
      }
    },

    //錯誤訊息
    messages: {
      name: {
        required: '姓名不可為空',
        regex: '不可輸入符號'
      },
      mobile: {
        required: '電話不可為空',
        regex: '需前2碼為\"09\"的10位數字'
      },
      email: {
        required: 'Email不可為空',
        email: '需符合Email格式且包含\"@\"'
      }
    }
  });

  //bootstrap上傳文件名
  bsCustomFileInput.init();

  // $('body').addClass('overflow-hidden');
}

//modalClose
function modalClose(that) {
  that.closest('.modal').find('.modalContent').addClass('bounceOutDown');
  setTimeout(function () {
    that.closest('.modal').remove();
  }, 400);
  // $('body').removeClass('overflow-hidden');
}

//modalConfirmOpen
function modalConfirmOpen() {
  $('body').prepend($('#modalConfirm>.modal').clone(true));
}

//ajax
function send() {
  $.ajax({
    url: '',
    type: 'post',
    data: { worktime: $("#data").text() },
    error: function (xhr) {
      $('#fail').text('發送失敗，請稍候再嘗試');
    },
    success: function (res,status) {
      if (res == '') {
        alert("資料為空");
      } else {
        $('#success').text('發送成功');
        console.log(typeof res);
      }
      //modalClose($('.modal:visible'));
    }
  });
}

//chrat.js
$(function () {

  //myChart1
  var ctx = document.getElementById('myChart1');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
      ],
      datasets: [{
        label: '# of Votes',
        data: [
          12,
          19,
          3,
          5,
          2,
          3
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  //myChart2
  var ctx = document.getElementById('myChart2');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
      ],
      datasets: [{
        label: '# of Votes',
        data: [
          12,
          19,
          3,
          5,
          2,
          3
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  //myChart3
  var ctx = document.getElementById('myChart3');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
      ],
      datasets: [{
        label: '# of Votes',
        data: [
          12,
          19,
          3,
          5,
          2,
          3
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  //myChart4
  var ctx = document.getElementById('myChart4');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
      ],
      datasets: [{
        label: '# of Votes',
        data: [
          12,
          19,
          3,
          5,
          2,
          3
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

});

var app = new Vue({
  el: '#test',
  data: {
    title: 'Hello Vue!'
  }
})