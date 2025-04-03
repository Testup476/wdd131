document.getElementById("currentyear").textContent = "©" + new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified :" + document.lastModified;

// Get the menu and the menu icon elements
const menuList = document.getElementById("menuList");
const menuIcon = document.getElementById("menuIcon");

// Toggle the visibility of the menu when the hamburger icon is clicked
menuIcon.addEventListener("click", () => {
    // Toggle the 'active' class for the menu
    menuList.classList.toggle("active");
});



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

const templeContainer = document.getElementById("templeContainer");

// Function to create and display temple cards
function renderTemples(templesArray) {
    templeContainer.innerHTML = ""; // Clear previous content

    templesArray.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card"); // add a class with a name temple-card to the new div created.

        const templeContent = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location</strong>: ${temple.location}</p>
      <p><strong>Dedicated<strong>: ${temple.dedicated}</p>
      <p><strong>Area:</strong>${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

        templeCard.innerHTML = templeContent; // To the template-card div created we append the values of the templeContent from our array
        templeContainer.appendChild(templeCard); // Append the templateCard to the TempleContaire class
    });
}

// Initial render with all temples
renderTemples(temples);

// Filter Functions
function filterOldTemples() {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    renderTemples(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    renderTemples(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    renderTemples(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    renderTemples(smallTemples);
}

// Event Listeners for Navigation Menu
document.querySelectorAll("#menuList li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const menuItem = event.target.textContent;

        switch (menuItem) {
            case "Old":
                filterOldTemples();
                break;
            case "New":
                filterNewTemples();
                break;
            case "Large":
                filterLargeTemples();
                break;
            case "Small":
                filterSmallTemples();
                break;
            case "Home":
                renderTemples(temples);
                break;
        }
    });
});
