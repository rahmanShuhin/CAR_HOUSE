const hide_social = () => {
  const social = document.querySelector(".social-container");
  const search = document.querySelector(".search-box");
  console.log(social);
  social.style.display = "none";
  search.style.display = "flex";
};
const hide_search = () => {
  const social = document.querySelector(".social-container");
  const search = document.querySelector(".search-box");
  console.log(social);
  social.style.display = "flex";
  search.style.display = "none";
};
//handle slider change
const color = [
  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./img/erik-mclean-u7B2HTbzVko-unsplash.jpg)",
  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./img/tools.jpg)",
  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(./img/car_engine.jpg)",
  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./img/tires.jpg)",
  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./img/erik-mclean-u7B2HTbzVko-unsplash.jpg)",
];
const sub_para = [
  "CAR CARE",
  "TOOLS",
  "ENGINE & PERFORMANCE",
  "TIRES & WHEELS",
  "CAR CARE",
];
const sub_h2 = [
  "Best Wax For Black Cars in 2020",
  "Best Car Jack Reviewed in 2020",
  "Best Octane Booster For Your Engine In 2020",
  "Best Snow & Winter Tires In 2020",
  "Best Leather Conditioner In 2020",
];
let count = 0;
setInterval(() => {
  count++;
  slider(count);
}, 10000);
const slider = (num) => {
  count = num;
  if (count === 5) {
    count = 0;
  } else if (count === -1) {
    count = 4;
  }
  const all = document.querySelectorAll(".slider > div");
  const para = document.getElementById("para");
  const h2 = document.getElementById("top-h2");
  for (let i = 0; i < all.length; i++) {
    if (i === num) {
      all[i].classList.add("active");
      document.querySelector(".landing").style.background = color[i];
      para.innerText = sub_para[i];
      h2.innerText = sub_h2[i];
    } else {
      all[i].classList.remove("active");
    }
  }
};
const add = () => {
  console.log("before", count);
  count++;
  console.log("after", count);
  slider(count);
};
const min = () => {
  count--;
  slider(count);
};

//nav bar show hide
const navShow = () => {
  const menu = document.querySelector(".menu-list");
  const social = document.querySelector(".social-container");
  const search = document.querySelector(".search-box");
  const burger = document.querySelector(".burger");
  burger.classList.toggle("toggle");
  menu.classList.toggle("nav-active");
  social.classList.toggle("nav-active");
  search.classList.toggle("nav-active");
  console.log(menu);
};
