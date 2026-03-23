if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("SW registered:", reg.scope));
  });
}
//Using the tabs to switch the visibility of the forms
tab_button = document.querySelector(".tab_button.active_tab");
tab_button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("tab clicked");
});
