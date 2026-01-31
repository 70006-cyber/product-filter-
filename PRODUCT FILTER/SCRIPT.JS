function filterProducts(category) {

  let allCards = document.getElementsByClassName("card");

  for (let i = 0; i < allCards.length; i++) {

    if (category === "all") {
      allCards[i].style.display = "block";
    }
    else if (allCards[i].classList.contains(category)) {
      allCards[i].style.display = "block";
    }
    else {
      allCards[i].style.display = "none";
    }

  }
}
