function apperPopup() {
  swal("Add your Task :", {
    content: "input",
  })
  .then((value) => {
    //swal(`You typed: ${value}`);
    //alert("hello");
  });
}
