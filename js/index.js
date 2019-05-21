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
    url: 'http://udonsite.com/ajax/success.php',
    type: 'get',
    // cache: 'false',
    data: {
      name: "UDON",
      gender: "male",
      age: 30
    },
    error: function (xhr) {
      $('#fail').text('發送失敗，請稍候再嘗試');
    },
    success: function (res, status) {
      if (res == '') {
        alert("資料為空");
      } else {
        $('#successa').text('發送成功');
        console.log("res: " + res);
        console.log("res類型: " + typeof res);
        // var resObj = JSON.parse(res);
        // console.dir(resObj);
        // console.log("resObj類型: " + typeof resObj);
        // console.log("發送狀態: " + status);
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

// autocomplete
$(function() {
  $.ajax({
    url: 'https://udonsite.com/ajax/success.php',
    type: 'get',
    cache: false,
    success: function (res) { 
      // console.log('res: ' + res + 'resType: ' + typeof res);
      $( "#hospital" ).autocomplete({
        source: JSON.parse(res),
        autoFocus: true,
      });
    }
  });
});

//gacha machine
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var ball1 = document.getElementById('ball1');//图片对象
var ball2 = document.getElementById('ball2');//图片对象
var ball3 = document.getElementById('ball3');//图片对象
var ball4 = document.getElementById('ball4');//图片对象
var ballList = [ball1, ball2, ball3, ball4];//图片对象数组
var ballNum = 4;//扭蛋机里面的小球数
var awardList = [];//扭蛋机中的小球集合
var timer;//计时器
var award = document.getElementById('awardBall');
var message = document.getElementById('message');

function Ball(index, img) {
  this.r = 30;//小球半径
  this.x = this.rand(canvas.width - this.r * 2);//小球初始横坐标
  this.y = this.rand(canvas.height - this.r * 2);//小球初始纵坐标
  this.color = index;//小球颜色，以下标表示
  this.img = img;//小球素材
  do {
      this.speedX = this.rand(20) - 10;
  } while (this.speedX < 5);//小球横坐标改变速度
  do {
      this.speedY = this.rand(20) - 10;
  } while (this.speedY < 5);//小球纵坐标改变速度
}

Ball.prototype = {
  rand: function (num) {//随机数
      return Math.random() * num;
  },
  run: function () {//小球运动函数
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width - this.r * 2) {//小球碰到右边界，横坐标速度变为负
          this.speedX = -this.speedX;
      }
      if (this.x < 0) {//小球碰到左边界，横坐标速度变为正
          this.speedX = Math.abs(this.speedX);
      }
      if (this.y > canvas.height - this.r * 2) {//小球碰到下边界，纵坐标速度变为负
          this.speedY = -this.speedY;
      }
      if (this.y < 0) {//小球碰到上边界，纵坐标速度变为正
          this.speedY = Math.abs(this.speedY);
      }
      ctx.drawImage(this.img, this.x, this.y, 60, 60);//绘制小球
  }
}

function init() {//初始化
  for (let i = 0; i < ballNum; i++) {//随机生成各色小球
      let index = Math.floor(4 * Math.random());
      awardList[i] = new Ball(index, ballList[index]);//新建小球对象
  }
  window.clearInterval(timer);//清除计时器
  timer = setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);//清空画布
      for (let i = 0; i < awardList.length; i++) {
          awardList[i].run();
      }//使小球运动
  }, 15);
}

function play() {
  if (awardList.length === 0) {//奖池中没有小球
      alert('重新开始！');
      init();
      message.innerText = '点击抽奖';
  } else {
      window.clearInterval(timer);//清除计时器
      let r = awardList.pop();//将奖池中的小球减少
      timer = setInterval(function () {
          ctx.clearRect(0, 0, canvas.width, canvas.height);//清空画布
          for (let i = 0; i < awardList.length; i++) {
              awardList[i].run();
          }//使小球运动
      }, 15);
      switch (r.color) {//小球掉落动画
          case 0:
              award.setAttribute('class', 'dropBall1');
              break;
          case 1:
              award.setAttribute('class', 'dropBall2');
              break;
          case 2:
              award.setAttribute('class', 'dropBall3');
              break;
          case 3:
              award.setAttribute('class', 'dropBall4');
              break;
      }
      setTimeout(function () {//扭蛋成功提示
          award.setAttribute('class', '');
          switch (r.color) {
              case 0:
                  message.innerText = '紫球！';
                  break;
              case 1:
                  message.innerText = '绿球！';
                  break;
              case 2:
                  message.innerText = '黄球！';
                  break;
              case 3:
                  message.innerText = '红球！';
                  break;
          }
      }, 1100);
  }
}

init();