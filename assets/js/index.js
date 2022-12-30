const modal = document.getElementById("myModal");

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
  img.style.left = getRandom(0, 1500 - 200) + 'px'; // 👈🏼 Horizontally
  img.style.top = getRandom(0, 700 - 200) + 'px'; // 👈🏼 Vertically
}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

