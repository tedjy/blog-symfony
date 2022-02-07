// const btn1 = document.querySelector("#btn-history");
// const btn2 = document.querySelector("#btn-vision");
// const btn3 = document.querySelector("#btn-goals");

// const history = document.querySelector(".history");
// const vision = document.querySelector(".vision");
// const goals = document.querySelector(".goals");

// btn1.addEventListener("click", function () {
//   vision.style.display = "none";
//   goals.style.display = "none";
//   history.style.display = "block";

// });

// btn2.addEventListener("click", function () {
//   vision.style.display = "block";
//   goals.style.display = "none";
//   history.style.display = "none";
// });

// btn3.addEventListener("click", function () {
//   vision.style.display = "none";
//   goals.style.display = "block";
//   history.style.display = "none";
// });

// ? ou en plus simpolifier

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });
