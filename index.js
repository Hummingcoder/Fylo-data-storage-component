let w = window.innerWidth;
const text = document.querySelector(".txt");
const textBottom = document.querySelectorAll(".gbs p");
const gbtxt = document.querySelectorAll(".remaining-gb p");
let splitText = text.innerHTML.split(" ");
splitText.forEach((txt, i) => {
  splitText[i] =
    txt === "815" || txt.toLowerCase() === "gb"
      ? `<span class="bold">${txt}</span>`
      : `<span>${txt}</span>`;
});
text.innerHTML = splitText.join(" ");

textBottom.forEach((item) => {
  let txts = item.innerHTML
    .split("")
    .map((t) => `<span>${t}</span>`)
    .join("");
  item.innerHTML = txts;
});
gbtxt.forEach((item) => {
  let txts = item.innerHTML
    .split("")
    .map((t) => `<span>${t}</span>`)
    .join("");
  console.log(txts);

  item.innerHTML = txts;
});

function anim() {
  let tl = gsap.timeline();
  tl.from(".left", {
    padding: 0,
    height: 0,
    transformOrigin: "bottom left",
  })
    .from(
      ".right",
      {
        transformOrigin: "top right",
        padding: 0,
        height: 0,
      },
      "<"
    )
    .from(".logo", { yPercent: -200, opacity: 0 }, "r")
    .from(
      ".remaining-gb",
      {
        yPercent: -100,
        opacity: 0,
        scale: 0,
      },
      "r"
    )
    .from(
      ".slide-p",
      {
        width: 0,
        duration: 0.6,
        opacity: 0,
      },
      "t"
    )
    .from(
      ".btn",
      {
        y: 100,
        stagger: 0.3,
        scale: 0,
        transformOrigin: "bottom center",
      },
      "<"
    )
    .from(
      ".slide-c",
      {
        width: 0,
        duration: 1.3,
        ease: "back",
      },
      "l"
    );
  requestAnimationFrame(() => {
    tl.from(
      ".txt span",
      {
        y: -100,
        stagger: 0.3,
        opacity: 0,
        duration: 1,
      },
      "t"
    );
  });
  requestAnimationFrame(() => {
    tl.from(
      ".gbs p span",
      {
        y: 100,
        stagger: 0.2,
        opacity: 0,
        duration: 0.6,
      },
      "t"
    );
  });
  requestAnimationFrame(() => {
    tl.from(
      ".remaining-gb p span",
      {
        y: 100,
        stagger: 0.2,
        opacity: 0,
        duration: 0.6,
      },
      "r"
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let ldr = document.querySelector(".loader");
  ldr.style.opacity = "0";
  setTimeout(() => {
    ldr.style.display = "none";
  }, 1000);
  anim();
});
