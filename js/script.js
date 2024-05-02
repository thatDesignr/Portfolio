const carousel = document.querySelector(".carousel"),
firstDiv = carousel.querySelectorAll(".learningoutcome")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstDivWidth = firstDiv.clientWidth + 14; // getting first div width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstDivWidth : firstDivWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

carousel.addEventListener('mousedown', (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - prevPageX);
  carousel.scrollLeft = prevScrollLeft - walk;
});

carousel.addEventListener('mouseup', () => {
  isDragStart = false;
});