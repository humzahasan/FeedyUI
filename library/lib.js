console.log("YOLO");

function showSnackBar(btnId, snackbarId) {
  var btnGroup = document.getElementById(`${btnId}`);
  console.log(btnGroup);
  btnGroup.addEventListener("click", () => {
    let snackBarEle = document.querySelectorAll(`#${snackbarId}`);

    snackBarEle.forEach((ele) => {
      ele.classList.add("show");

      setTimeout(function () {
        ele.classList.remove("show");
      }, 3000);
    });
  });
}

function increment(qt) {
  let qnty = document.getElementById(qt).value;
  qnty = Number(qnty) + 1;
  document.getElementById(qt).value = qnty;
}

function decrement(qt) {
  let minQnty = document.getElementById(qt).value;
  if (minQnty <= 0) {
    document.getElementById(qt).value = 0;
  } else {
    minQnty = Number(minQnty) - 1;
  }
  document.getElementById(qt).value = minQnty;
}
