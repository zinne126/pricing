function toggleBtn() {
  let btn = document.getElementById("btn");

  let monthly = document.querySelectorAll(".price-monthly");
  let yearly = document.querySelectorAll(".price-annually");

  btn.classList.toggle("active");

  if (btn.classList.contains("active")) {
    yearly.forEach((price) => (price.style.display = "none"));
    monthly.forEach((price) => (price.style.display = "flex"));
  } else {
    yearly.forEach((price) => (price.style.display = "flex"));
    monthly.forEach((price) => (price.style.display = "none"));
  }
}
