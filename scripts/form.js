document.getElementById("currentyear").textContent = "©" + new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified : " + document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


document.addEventListener("DOMContentLoaded", function () {

    const productSelect = document.getElementById("product-name");

    // Placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.textContent = "Select a Product ...";
    productSelect.appendChild(placeholderOption);


    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });


    if (!localStorage.getItem("reviewCount")) {
        localStorage.setItem("reviewCount", "0");
    }

    if (window.location.pathname.endsWith("review.html")) {
        let reviewCount = Number(localStorage.getItem("reviewCount"));
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount.toString());

        const reviewCountElement = document.getElementById("review-count");
        if (reviewCountElement) {
            reviewCountElement.textContent = `Total Reviews: ${reviewCount}`;
        }
    }
});
