if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("SW registered:", reg.scope));
  });
}

//Handle trade form submission
tradeform = document.getElementById("tradeform");
tradeform.addEventListener("submit", function (e) {
  //Prevent page reloads
  e.preventDefault();

  //Access the form data
  const form_data = new FormData(this);

  tradetype = form_data.get("trade_type");
  result = form_data.get("result");
  session_name = form_data
    .get("session_name")

    [
      //Select all the items that match the button group names, then set them to false to reset the form
      ("trade_type", "result")
    ].forEach((name) => {
      document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
        input.checked = false;
      });
    });
  //Select all the input fields and empty them on submission
  document.querySelectorAll("input[type='number']").forEach((input) => {
    input.value = "";
  });

  document.activeElement.blur();

  console.log(tradetype, result);
});
