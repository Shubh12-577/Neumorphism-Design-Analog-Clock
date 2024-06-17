const root = document.documentElement;
const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");
const body = document.querySelector("body");
body.addEventListener("click", () => {
  if (body.className === "Light") {
    body.className = "Dark";
    root.style.setProperty("--back-clr", "#202020");
    root.style.setProperty("--nut-clr1", "#666666");
    root.style.setProperty("--hr-hand", "#dde1e7");
    root.style.setProperty(
      "--boxShadow-out",
      "3px 3px 7px #171717, -3px -3px 7px #292929"
    );
    root.style.setProperty(
      "--boxShadow-in",
      "inset 3px 3px 7px #191919,  inset -3px -3px 5px #272727"
    );
    root.style.setProperty(
      "--boxShadow-sm",
      "-1px -1px 5px #171717, 1px 1px 3px #292929"
    );
  } else {
    body.className = "Light";
    root.style.setProperty("--back-clr", "#dde1e7");
    root.style.setProperty("--nut-clr1", "#404040");
    root.style.setProperty("--hr-hand", "#303030");
    root.style.setProperty(
      "--boxShadow-out",
      "-3px -3px 7px #ffffff73,3px 3px 5px rgba(94, 104, 121, 0.288)"
    );
    root.style.setProperty(
      "--boxShadow-in",
      "inset -3px -3px 7px #ffffff73,inset 3px 3px 5px rgba(94, 104, 121, 0.288)"
    );
    root.style.setProperty(
      "--boxShadow-sm",
      "-1px -1px 5px #ffffff73, 1px 1px 3px rgba(94, 104, 121, 0.288"
    );
  }
});
setInterval(() => {
  let time = new Date();
  let secs = time.getSeconds() * 6;
  let mins = time.getMinutes() * 6;
  let hrs = time.getHours() * 30;
  sec.style.transform = `rotateZ(${secs}deg)`;
  min.style.transform = `rotateZ(${mins}deg)`;
  hr.style.transform = `rotateZ(${hrs + mins / 12}deg)`;
});
