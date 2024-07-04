document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalBenefits = document.getElementById("modal-benefits");

  const exerciseInfo = {
    "Relaxační a zábavné": {
      title: "Relaxační a zábavné cvičení",
      image: "images/graphic1.png",
      description:
        "Toto cvičení kombinuje relaxační techniky s zábavnými prvky pro uvolnění těla i mysli.",
      benefits: [
        "Snižuje stres a úzkost",
        "Zlepšuje kvalitu spánku",
        "Zvyšuje celkovou pohodu",
      ],
    },
    "Hooping a zábavné": {
      title: "Hooping a zábavné cvičení",
      image: "images/graphic2.png",
      description:
        "Hooping je skvělý způsob, jak spojit kardio trénink s zábavou a koordinací.",
      benefits: [
        "Posiluje core a zlepšuje rovnováhu",
        "Spaluje kalorie a tvaruje postavu",
        "Rozvíjí koordinaci a rytmus",
      ],
    },
    "Streaching a zábavné": {
      title: "Stretching a zábavné cvičení",
      image: "images/graphic3.png",
      description:
        "Kombinace stretchingu a zábavných prvků pro zlepšení flexibility a nálady.",
      benefits: [
        "Zvyšuje flexibilitu a rozsah pohybu",
        "Snižuje riziko zranění",
        "Zlepšuje držení těla",
      ],
    },
    "Skákání a zábavné": {
      title: "Skákání a zábavné cvičení",
      image: "images/graphic4.png",
      description:
        "Energické cvičení kombinující skákání s různými zábavnými aktivitami pro intenzivní kardio trénink.",
      benefits: [
        "Zlepšuje kardiovaskulární zdraví",
        "Posiluje dolní končetiny a core",
        "Zvyšuje energii a vitalitu",
      ],
    },
  };

  function openModal(info) {
    modalTitle.textContent = info.title;
    modalImage.src = info.image;
    modalImage.alt = info.title;
    modalDescription.textContent = info.description;
    modalBenefits.innerHTML = info.benefits
      .map((benefit) => `<li>${benefit}</li>`)
      .join("");
    modal.style.display = "block";
  }

  const graphics = document.querySelectorAll(".box-click");

  graphics.forEach(function (graphic) {
    graphic.addEventListener("click", function () {
      let exerciseType = "";
      if (graphic.querySelector(".graphic1")) {
        exerciseType = "Relaxační a zábavné";
      } else if (graphic.querySelector(".graphic2")) {
        exerciseType = "Hooping a zábavné";
      } else if (graphic.querySelector(".graphic3")) {
        exerciseType = "Streaching a zábavné";
      } else if (graphic.querySelector(".graphic4")) {
        exerciseType = "Skákání a zábavné";
      }
      openModal(exerciseInfo[exerciseType]);
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
