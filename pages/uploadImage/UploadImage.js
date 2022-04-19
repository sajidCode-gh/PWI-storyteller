// ===========================upload image ==============
const outputImage = document.querySelector(".output-image");
const uploadImage = document.querySelector("#upload-image");
const uploadLabel = document.querySelector(".upload-image");
const shareBtn = document.querySelector(".share-btn button");

uploadImage.addEventListener("change", (e) => {
  uploadLabel.style.display = "none";
  shareBtn.classList.add("btn3-1");
  shareBtn.classList.remove("btn3");
  outputImage.src = URL.createObjectURL(e.target.files[0]);
});
