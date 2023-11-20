// //获取登录按钮和输入框元素
// var loginButton = document.getElementById('button1');
// var usernameInput = document.getElementById('name');
// var passwordInput = document.getElementById('password');

// //监听登录按钮的点击事件
// loginButton.addEventListener('click', function() {
//   //获取输入框中的账号和密码
//   var username = usernameInput.value;
//   var password = passwordInput.value;

//   //预设的正确账号和密码
//   var correctUsername = 'xuhaochen';
//   var correctPassword = '123456';

// //  比较输入的账号和密码是否正确
//   if (username === correctUsername && password === correctPassword) {
//     //跳转到指定页面
//     window.location.href = 'http://example.com/home';
//   } else {
//     //提示用户输入错误
//     alert("账号或密码错误！");
//     event.preventDefault();//阻止表单跳转
//   }
// });
function myFunCTion(event)
{
	var x=document.getElementById("name").value;
  var y=document.getElementById("password").value;
  if(x !== "xuhaochen" && password !== "123456"){
    alert("账号密码错误或未填写！");
    event.preventDefault();//阻止表单跳转
  }
	else if(x !== "xuhaochen"){
		alert("账号错误！");
    event.preventDefault();//阻止表单跳转
	}
  else if (y !== "123456"){
    alert("密码错误！");
    event.preventDefault();//阻止表单跳转
  }
  else{
    alert("欢迎登录个人空间！");
  }
}
