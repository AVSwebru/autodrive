try {

    let sortCostLink = document.querySelector(".sort-block a");

    sortCostLink.addEventListener("click", () => {
        sortCostLink.querySelector("object").classList.toggle('rotated');
    });

} catch (e) { }