const openBtn = document.getElementById("open-btn");
const tundra1ModalContainer = document.getElementById(
  "tundra1-modal-container"
);
const tundra2ModalContainer = document.getElementById(
  "tundra2-modal-container"
);
const semipoyModalContainer = document.getElementById(
  "semipoy-modal-container"
);
const pcTundraModalContainer = document.getElementById(
  "pctundra-modal-container"
);
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  const selector = Math.floor(Math.random() * 4);
  switch (selector) {
    case 0:
      tundra1ModalContainer.style.display = "block";
      break;
    case 1:
      tundra2ModalContainer.style.display = "block";
      break;
    case 2:
      semipoyModalContainer.style.display = "block";
      break;
    case 3:
      pcTundraModalContainer.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
  tundra1ModalContainer.style.display = "none";
  tundra2ModalContainer.style.display = "none";
  semipoyModalContainer.style.display = "none";
  pcTundraModalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === tundra1ModalContainer) {
    tundra1ModalContainer.style.display = "none";
  }
  if (e.target === tundra2ModalContainer) {
    tundra2ModalContainer.style.display = "none";
  }
  if (e.target === semipoyModalContainer) {
    semipoyModalContainer.style.display = "none";
  }
  if (e.target === pcTundraModalContainer) {
    pcTundraModalContainer.style.display = "none";
  }
});
