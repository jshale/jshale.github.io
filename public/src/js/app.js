if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("SW registered:", reg.scope));
  });
}
//Using the tabs to switch the visibility of the forms
tab_buttons = document.querySelectorAll(".tab_button:not(.active_tab)");
tab_buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (element.classList.contains("active_tab")) return;

    tabButtons.forEach((b) => b.classList.remove("active_tab"));

    element.classList.add("active_tab");
  });
});
