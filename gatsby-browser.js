exports.onInitialClientRender = () => {
  document.getElementById("___gatsby").style.display = "none";
  setTimeout(function () {
    document.getElementById("___gatsby").style.display = "inline";
  }, 500);
};
