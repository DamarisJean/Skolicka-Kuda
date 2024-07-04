document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("modal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get the modal info div
  var modalInfo = document.getElementById("modal-info");

  // Function to open the modal with the relevant information
  function openModal(info) {
    modalInfo.innerHTML = info;
    modal.style.display = "block";
  }

  // Add click events for each graphic
  var graphics = document.querySelectorAll(".box-click");
  console.log("Graphics found:", graphics);

  if (graphics.length === 0) {
    console.error("No graphic elements found!");
  }

  graphics.forEach(function (graphic) {
    graphic.addEventListener("click", function () {
      var info = "";
      if (graphic.querySelector(".graphic1")) {
        info =
          "<h3>Relaxační a zábavné</h3><p>Information about Relaxační a zábavné.</p>";
      } else if (graphic.querySelector(".graphic2")) {
        info =
          "<h3>Hooping a zábavné</h3><p>Information about Hooping a zábavné.</p>";
      } else if (graphic.querySelector(".graphic3")) {
        info =
          "<h3>Streaching a zábavné</h3><p>Information about Streaching a zábavné.</p>";
      } else if (graphic.querySelector(".graphic4")) {
        info =
          "<h3>Skákání a zábavné</h3><p>Information about Skákání a zábavné.</p>";
      }
      openModal(info);
    });
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
