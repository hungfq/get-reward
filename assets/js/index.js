const spanClick = () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

const handleClick = () => {
  // window.alert('BẠN NHẬN ĐƯỢC 1 BÚA DÔ ĐẦU')
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  const img = document.querySelector('body')
}

const handleMouseOver = () => {
  const img = document.querySelector('#gift')
  img.setAttribute("style", "position:absolute;");
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  
  // img.style.left = getRandom(0, width - 300) + 'px'; // 👈🏼 Horizontally
  // img.style.top = getRandom(0, height - 300) + 'px'; // 👈🏼 Vertically
}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

handleMouseOver();
handleClick();

