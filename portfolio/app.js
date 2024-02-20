// Selections

const header = document.querySelector("header");
const burgerMenu = document.querySelector(".burger-menu");
const menuBar = document.querySelector(".menu-bar");
const exit = document.querySelector(".exit");
const scrollTop = document.querySelector(".scroll-top");
const cards = document.querySelector(".cards");

// DATA

const data = [
  {
    git: "https://github.com/Sultanateteam/Country-Api",
    netlify: "https://fetch-country-api-1.netlify.app",
    img: "country-api.png",
    id: 1,
    name: "Country API",
  },
  {
    git: "https://github.com/Sultanateteam/Dating-app",
    netlify: "https://dating-app-local.netlify.app",
    img: "dating-app.png",
    id: 2,
    name: "Dating App",
  },

  {
    git: "https://github.com/Sultanateteam/weather-/tree/main/",
    netlify: "https://weather-app-013.netlify.app",
    img: "weather.png",
    name: "Weater App",
    id: 3,
  },
  {
    git: "https://github.com/Sultanateteam/another-portfolio",
    netlify: "https://another-portfolio.netlify.app",
    img: "another-portfolio.png",
    id: 4,
    name: "Another portfolio",
  },
  {
    git: "https://github.com/Sultanateteam/BootstrapMade",
    netlify: "https://herobiz-portfolio.netlify.app",
    img: "HerroBiz.png",
    id: 5,
    name: "Hero.Biz",
  },
  {
    git: "https://github.com/Sultanateteam/PingPong",
    netlify: "https://ping-pong-smart.netlify.app",
    img: "ping-pong.png",
    id: 6,
    name: "PingPong",
  },
  {
    git: "https://github.com/Sultanateteam/artcom",
    netlify: "https://this-is-mine.netlify.app",
    img: "art.png",
    id: 7,
    name: "Art.Design",
  },
  {
    git: "https://github.com/Sultanateteam/Bootstrap",
    netlify: "https://bootstrap-simple-site.netlify.app",
    img: "bootstrap.png",
    id: 8,
    name: "Bootstrap project",
  },
  {
    git: "https://github.com/Sultanateteam/breed",
    netlify: "https://funny-crazy-site.netlify.app",
    img: "breed.png",
    id: 9,
    name: "Breed.com",
  },
  {
    git: "https://github.com/Sultanateteam/calc",
    netlify: false,
    img: "calc.png",
    id: 10,
    name: "Calculator",
  },
  {
    git: "https://github.com/Sultanateteam/React-todo-list",
    netlify: false,
    img: "React-todo.png",
    id: 11,
    name: "Todo list React",
  },
  {
    git: "https://github.com/Sultanateteam/ToDoList",
    netlify: "https://mine-to-do-list-1.netlify.app",
    img: "todo-list.png",
    id: 12,
    name: "Todo list",
  },
  {
    git: "https://github.com/Sultanateteam/game",
    netlify: "https://games-13.netlify.app",
    img: "game.png",
    id: 13,
    name: "Game",
  },
  {
    git: "https://github.com/Sultanateteam/random-color",
    netlify: "https://random-color-gradients.netlify.app",
    img: "random-colors.png",
    id: 14,
    name: "Random Colors",
  },
  {
    git: "https://github.com/Sultanateteam/Random-Users",
    netlify: "https://users-random-1.netlify.app",
    img: "random-user.png",
    id: 15,
    name: "Random Users",
  },
  {
    git: "https://github.com/Sultanateteam/tasodifiy-sonlar-generatsiyasi",
    netlify: "https://random-numbers-1.netlify.app",
    img: "random-nubers.png",
    id: 16,
    name: "random-numbers",
  },
  {
    git: "https://github.com/Sultanateteam/circle-box",
    netlify: "https://poetic-tulumba-3dd62a.netlify.app",
    img: "circle.png",
    id: 17,
    name: "Circle",
  },
  {
    git: "https://github.com/Sultanateteam/time",
    netlify: "https://time-watch-1.netlify.app",
    img: "date.png",
    id: 18,
    name: "Time",
  },
  {
    git: "https://github.com/Sultanateteam/flower",
    netlify: "https://simple-ap.netlify.app",
    img: "flowers.png",
    id: 19,
    name: "Flowers",
  },
  {
    git: "https://github.com/Sultanateteam/json-server-users",
    netlify: false,
    img: "json-server.jpg",
    id: 20,
    name: "Json server users",
  },
];

// Functions

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.classList.add("fixed");
    scrollTop.classList.remove("dNone");
  } else {
    header.classList.remove("fixed");
    scrollTop.classList.add("dNone");
  }
});

burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  menuBar.classList.remove("dNone");
  burgerMenu.classList.add("dNone");
});

menuBar.addEventListener("click", (e) => e.stopPropagation());

const handleRemove = () => {
  menuBar.classList.add("dNone");
  burgerMenu.classList.remove("dNone");
};

exit.addEventListener("click", handleRemove);
window.addEventListener("click", handleRemove);

function projects(data) {
  cards.innerHTML = "";
  data.map((project) => {
    return (cards.innerHTML += `
      <li class="card">
      <img src="./images/portfolio-img/${project.img}" alt="Photo" />
      <p>
        <span>${project.name}</span>
        <span>
          <a href="${
            project.netlify ? project.netlify : project.git
          }"><i class="fa-solid fa-link"></i></a>
          <a href="${project.git}"><i class="fa-brands fa-github"></i></a>
        </span>
      </p>
    </li>`);
  });
}

projects(data);
