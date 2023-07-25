const hideList = document.querySelector(
  ".main .container .header .right  .btn"
);
const list = document.querySelector(".main .container .header .right  ul");
const showList = document.querySelector(
  ".main .container .header .right .watchList"
);

hideList.addEventListener("click", () => {
  list.classList.add("remove");
  hideList.classList.add("remove");
});

showList.addEventListener("click", () => {
  list.classList.remove("remove");
  hideList.classList.remove("remove");
});

const hideRegister = document.querySelector(
  ".main .container .header .right  .button"
);
const register = document.querySelector(
  ".main .container .header .right  .register"
);
const showRegister = document.querySelector(
  ".main .container .header .right .signin"
);

hideRegister.addEventListener("click", () => {
  register.classList.add("remove");
  hideRegister.classList.add("remove");
});

showRegister.addEventListener("click", () => {
  register.classList.remove("remove");
  hideRegister.classList.remove("remove");
});

const showHideBar = document.querySelector(
  ".main .container .header .right .bar"
);
const bar = document.querySelector(
  ".main .container .header .right .bar .offcanvas"
);

showHideBar.addEventListener("click", () => {
  if (bar.classList.contains("remove")) {
    bar.classList.remove("remove");
  } else {
    bar.classList.add("remove");
  }
});

const scrollBoxes = document.querySelectorAll('.slider .container .cards .box');
const prevButtons = document.querySelectorAll('.slider .container .buttons .prev');
const nextButtons = document.querySelectorAll('.slider .container .buttons .next');

scrollBoxes.forEach((scrollBox, i) => {
  let containerDimensions = scrollBox.getBoundingClientRect();
  let containerWidth = containerDimensions.width / 4;

  nextButtons[i].addEventListener("click", () => {
    scrollBox.scrollLeft += containerWidth;
  });

  prevButtons[i].addEventListener("click", () => {
    scrollBox.scrollLeft -= containerWidth;
  });
});


