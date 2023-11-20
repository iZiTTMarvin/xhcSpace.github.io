//百度搜索js
function searchOnBaidu() {
    let query = document.getElementById('search-input').value;
    //用if检查变量 query 是否存在一个真值
    if (query) {
      window.location.href = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
      //将页面重定向到百度搜索页面，并将搜索关键词作为参数传递。encodeURIComponent(query) 用于对搜索关键词进行编码，以确保在 URL 中的安全传输。
    }
  }


//播放音乐js：

  const music = document.getElementById('music');
  function playMusic() {
    music.play();
  }

  function pauseMusic() {
    music.pause();
  }
  
  

  //日期js
  function myFunction(){
  var x;
  var d=new Date().getDay();
  switch (d){
        case 0:x="今天是星期日";
            break;
        case 1:x="今天是星期一";
            break;
        case 2:x="今天是星期二";
            break;
        case 3:x="今天是星期三";
            break;
        case 4:x="今天是星期四";
            break;
        case 5:x="今天是星期五";
            break;
        case 6:x="今天是星期六";
            break;
       }
  document.getElementById("look-look-time").innerHTML=x;
}

//表格
var person = {
    name: '许皓辰',
    age: 18,
    gender: '男',
    occupation: '大学生'
  };

  
  $(document).ready(function() {
    var $table = $('#person-table');
    var $tbody = $table.find('tbody');
    var $row = $('<tr>');
    $row.append($('<td>').text(person.name)); 
    $row.append($('<td>').text(person.age));                  
    $row.append($('<td>').text(person.gender));
    $row.append($('<td>').text(person.occupation));
    $tbody.append($row);
    // append将包含个人信息的单元格插入到$row元素中。

    
$('#xianshibiaoge').on('click', function() {  
    $table.show();
});
});