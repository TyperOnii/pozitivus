const button = document.querySelector(".hero__button"); // BUTTON IN -MAIN SECTION-
const html = document.documentElement; // -HTML
const body = document.body; // -BODY
const headerTitles = document.querySelectorAll("[data-header-title]");
const headerLinks = document.querySelectorAll(".header__list-link"); // LINKS OF -HEADER-

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(`Высота области содержимого окна браузера: ${html.clientHeight}`);
//   console.log(`Ширина области содержимого окна браузера: ${html.clientWidth}`);
//   console.log(
//     Math.max(
//       body.clientHeight,
//       body.offsetHeight,
//       body.scrollHeight,
//       html.clientHeight,
//       html.offsetHeight,
//       html.scrollHeight
//     ),
//     "Высота окна браузера с прокруткой"
//   );
//   headerTitles[1].scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// });

// for (let link of headerLinks) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     for (let title of headerTitles) {
//       if (title.dataset.headerTitle == link.textContent) {
//         title.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   });
// }

// Событие СКРОЛЛ до соответсвущих секций
headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    for (let title of headerTitles) {
      if (title.dataset.headerTitle == link.textContent) {
        title.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(1);
  let message = document.createElement("div");
  let coords = button.getBoundingClientRect();
  message.textContent = "Hello World!";
  message.style.cssText = `
  display: inline-block;
  position: fixed;
  padding: 10px 20px;
  font-size: 16px;
  color: rgb(12, 76, 12);
  background-color: rgb(21, 155, 21);
  border: 1px solid rgb(2, 33, 2);
  `;
  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";
  button.after(message);
});
