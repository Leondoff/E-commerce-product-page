// Menu for mobile -->

const navMenu = document.getElementById("nav");
const navClose = document.getElementById("close-btn");
const navToggle = document.getElementById("toggle-btn");
const navLinks = document.querySelectorAll(".nav_link");

const removeMenu = (nav, menu) => {
  nav.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
};

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

removeMenu(navClose, navMenu);

navLinks.forEach((link) => {
  removeMenu(link, navMenu);
});

// Buttons for Cart Section

const equalNum = document.querySelector(".number");
const plusBtn = document.querySelector(".plus"); // for quantity
const minusBtn = document.querySelector(".minus"); // for quantity
const addToCart = document.querySelector(".toCart_btn"); // Add to cart button
// for quantity

let result = 0;

plusBtn.addEventListener("click", () => {
  result += 1;
  equalNum.textContent = result;
});

minusBtn.addEventListener("click", () => {
  if (result > 0) {
    result -= 1;
    equalNum.textContent = result;
  }
});


// Changing products images Function

const imgFunc = (
  mainImg,
  smallImages,
  smallImageHover,
  leftHandle,
  rightHandle
) => {
  smallImages.forEach((img) => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
    });
  });

  smallImageHover.forEach((image) => {
    image.addEventListener("click", () => {
      smallImageHover.forEach((otherImage) => {
        otherImage.classList.remove("smallImageBorder");
      });
      image.classList.add("smallImageBorder");
    });
  });

  let currentIndex = 0;

  leftHandle.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + smallImages.length) % smallImages.length;
    mainImg.src = smallImages[currentIndex].src;
  });

  rightHandle.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % smallImages.length;
    mainImg.src = smallImages[currentIndex].src;
  });

  console.log(smallImages.length);
  return;
};

const mainImg = document.getElementById("mainImg");
const smallImages = document.querySelectorAll(".small-img");
const smallImageHover = document.querySelectorAll(".smallImage");
const leftHandle = document.querySelector(".left_handle");
const rightHandle = document.querySelector(".right_handle");

imgFunc(mainImg, smallImages, smallImageHover, leftHandle, rightHandle); // For desktop

// Overlay

const overlayClose = document.querySelector(".overlay_btn");
const overlay = document.querySelector(".overlay");
const overlayImg = document.getElementById("overlay-img");
const overlaySmImgs = document.querySelectorAll(".small-img1");
const leftHandle1 = document.querySelector(".left_handle1");
const rightHandle1 = document.querySelector(".right_handle1");

mainImg.addEventListener("click", () => {
  overlay.style.display = "block";
});

overlayClose.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

imgFunc(overlayImg, overlaySmImgs, smallImageHover, leftHandle1, rightHandle1); // for overlay