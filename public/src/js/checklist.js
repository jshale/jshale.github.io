cond_button = document.querySelectorAll(".go_button");
containers = document.querySelectorAll(".condition_container");

cond_button.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    element.classList.toggle("go_button_go");
    element
      .closest(".condition_container")
      .classList.toggle("condition_container_go");

    element.textContent == "NO GO"
      ? (element.textContent = "GO")
      : (element.textContent = "NO GO");
  });
});
