// ============video playing logic===============
//this login is not the best but works

const video = document.querySelectorAll(".video video");
const videos = document.querySelector(".videos");
const playBtn = document.querySelectorAll(".video .play");
const closeBtn = document.querySelectorAll(".video .close");

playBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.classList.add("active");
    btn.previousElementSibling.setAttribute("controls", "");
    btn.previousElementSibling.play();
    btn.parentElement.scrollIntoView({ block: "center" });
    btn.style.display = "none";
    playBtn.forEach((btn) => {
      btn.style.pointerEvents = "none";
    });

    videos.classList.add("blurModel");
  });
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.classList.remove("active");
    btn.nextElementSibling.pause();
    btn.nextElementSibling.removeAttribute("controls", "");
    btn.parentElement.lastElementChild.style.display = "block";
    playBtn.forEach((btn) => {
      btn.style.pointerEvents = "all";
    });

    videos.classList.remove("blurModel");
  });
});

// ============================

//====================records page===============
// record card next
const cardHeading = document.querySelector(".card-title");
const cardPara = document.querySelector(".card-para");
const cardNext = document.querySelector(".card-next");
const card = document.querySelector(".record-card");
const closeCard = document.querySelector(".card-close");
const recordBtns = document.querySelectorAll(".record-flex > div");

const cards = [
  {
    heading: "Upload",
    paragraph:
      "Upload a video or photo that answers the question you have chosen to submit your story.",
  },
  {
    heading: "Photo",
    paragraph:
      "Take a photo and write a caption or story to go with it. People will love to read about your experience.",
    next: "Done",
  },
];

let counter = 0;

recordBtns[1].classList.add("active");

cardNext.addEventListener("click", () => {
  if (counter < 2) {
    cardHeading.textContent = cards[counter].heading;
    cardPara.textContent = cards[counter].paragraph;

    if (counter == 1) {
      cardNext.textContent = cards[counter].next;
    }
  } else {
    card.style.display = "none";
  }

  recordBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (!counter == 1) {
    recordBtns[counter].classList.add("active");
  }

  counter++;
});

closeCard.addEventListener("click", () => {
  card.style.display = "none";
});
