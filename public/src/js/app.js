if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("SW registered:", reg.scope));
  });
}

tradeform = document.getElementById("tradeform");
tradeform.addEventListener("submit", function (e) {
  e.preventDefault();

  ["trade_type", "result"].forEach((name) => {
    document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
      input.checked = false;
    });
  });

  document.querySelectorAll("input[type='number']").forEach((input) => {
    input.value = "";
  });

  const form_data = new FormData(this);

  tradetype = form_data.get("trade_type");
  result = form_data.get("result");

  console.log(tradetype, result);
});
