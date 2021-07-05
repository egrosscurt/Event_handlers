const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
  };
  const attachEventToChangeColorButton = function () {
    const toggleColorButton = document.getElementById("change-background-button");
    toggleColorButton.addEventListener("click", function () {
      changeClassBlueBackground();
    });
  };
  const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
      alert("Hello World!");
    });
  };
  
  attachEventToAlertButton();
  attachEventToChangeColorButton();