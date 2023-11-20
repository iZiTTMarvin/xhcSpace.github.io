const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

//实现幻灯片自动播放的功能
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);//在判断完索引之后，使用showSlide函数来显示当前幻灯片。
setInterval(nextSlide, 3000);
//使用setInterval函数来实现幻灯片的自动播放。



const title = document.querySelector('h1');

function changeColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  let i = 0;
  setInterval(() => {  //setInterval()函数被调用并传入一个箭头函数作为参数。这个箭头函数的作用是改变title元素的文本颜色。
    title.style.color = colors[i % colors.length];
    i++;
  }, 500);
}

changeColor();
// changeColor函数来启动这个颜色变化的动画。

