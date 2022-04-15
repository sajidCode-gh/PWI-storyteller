// ============video playing logic===============
const video = document.querySelectorAll(".video video");
const videos = document.querySelector(".videos");
const playBtn = document.querySelectorAll(".video .play");
const closeBtn = document.querySelectorAll(".video .close");

playBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.classList.add("active");
    btn.previousElementSibling.setAttribute("controls", "");
    btn.previousElementSibling.play();
    btn.parentElement.scrollIntoView();
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
