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
