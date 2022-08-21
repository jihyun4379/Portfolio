const plus = function (a, b) {
  let result = a + b;
  return result;
};

const navBtn = document.getElementById('navBtnIcon');
const navBar = document.querySelector('#navBar');

const navBtnClick = function () {
  if (navBtn.classList.contains('active')) {
    navBtn.classList.remove('active');
    navBar.classList.remove('active');
  } else if (!navBtn.classList.contains('active')) {
    navBtn.classList.add('active');
    navBar.classList.add('active');
  }

  //   navBtn.classList.toggle('active');
  //   navBar.classList.toggle('active');

  console.log(navBar);
};
