const showSnackBar = (btnId, snackbarId) => {
  var btnGroup = document.getElementById(`${btnId}`);

  btnGroup.addEventListener("click", () => {
    let snackBarEle = document.querySelectorAll(`#${snackbarId}`);

    snackBarEle.forEach((ele) => {
      ele.classList.add("show");

      setTimeout(() => {
        ele.classList.remove("show");
      }, 3000);
    });
  });
};

const increment = (qt) => {
  let qnty = document.getElementById(qt).value;
  qnty = Number(qnty) + 1;
  document.getElementById(qt).value = qnty;
};

const decrement = (qt) => {
  let minQnty = document.getElementById(qt).value;
  if (minQnty <= 0) {
    document.getElementById(qt).value = 0;
  } else {
    minQnty = Number(minQnty) - 1;
  }
  document.getElementById(qt).value = minQnty;
};

const toggleNav = () => {
  let navMenu = document.querySelector(".doc-menu-floating");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  if (navMenu.style.display === "" || navMenu.style.display === "none")
    navMenu.style.display = "block";
  else navMenu.style.display = "none";
};
