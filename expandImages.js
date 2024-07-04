document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery-container");

  //  Event listener set up to detect clicks inside the gallery
  galleryContainer.addEventListener("click", function (e) {
    e.preventDefault();

    const clickedElement = e.target.closest("a");

    if (clickedElement && clickedElement.classList.contains("box")) {
      const fullSizeImageSrc = clickedElement.getAttribute("href");

      // Create full-size image container
      const fullImageContainer = document.createElement("div");
      fullImageContainer.classList.add("full-image-container");

      // Create full-size image
      const fullImage = document.createElement("img");
      fullImage.src = fullSizeImageSrc;
      fullImage.alt = "Full size image";

      // Create close button
      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = "&times;";

      // Add elements to container
      fullImageContainer.appendChild(fullImage);
      fullImageContainer.appendChild(closeButton);

      // Add container to body
      document.body.appendChild(fullImageContainer);

      // Show the container
      setTimeout(() => (fullImageContainer.style.opacity = "1"), 0);

      // Close button functionality
      closeButton.addEventListener("click", function () {
        fullImageContainer.style.opacity = "0";
        setTimeout(() => fullImageContainer.remove(), 300);
      });
    }
  });
});
