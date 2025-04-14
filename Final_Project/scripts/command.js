export { command }

document.addEventListener('DOMContentLoaded', () => {
    const cartitem = document.getElementById("cartitem");
    const total = document.getElementById("Total");
    const cnt = document.getElementById("count");
    const rootage = document.getElementById("rootage");
    const cmd = document.getElementById("Cmd");
    const root = document.getElementById("root");
    let counter = 0;


    // We display the Item product through this function
    function DisplayCart(cart) {
        if (!cartitem || !total) return;
        let content = ``;
        let tt = 0;

        if (cart.length === 0) {
            content = "No command";
        } else {
            cart.forEach((element, i) => {
                tt += element.price;
                content += `
                    <div class="cart-item">
                            <div class="row-img">
                                <img class="rowimg" src="${element.imagurl} ">
                            </div>
                            <p style="font-size:12px;"> ${element.title}</p>
                            <h2 style="font-size:12px;">$ ${element.price}</h2>
                                <button onclick="delelement(${i})"> Delet from cart</button>
                    </div>
                `;
            });
        }

        cartitem.innerHTML = content;
        total.innerHTML = "$" + tt + ".00";
    }

    // This Function help us to define specific  Cart and a button to and in the list command
    function CartElement(array) {
        let content = ``; // we Initialized this to store the necessary HTML elements

        array.forEach(element => {
            content += `
                <div class="box">
                    <img class="images" src="${element.imagurl}">
                        <div class="bottom">
                            <p>${element.title}</p>
                            <h2> $ ${element.price}</h2>
                            <button onclick="addtocart(${counter++})"> Command this</button>
                        </div>
                </div>
            `;
        });

        root.innerHTML = content;
        count.innerHTML = counter;
    };

    CartElement(categories);

    window.addtocart = function (a) {
        Cart.push({ ...categories[a] });
        localStorage.setItem("cartitem", JSON.stringify(Cart));
        total.innerHTML = a.price;
        cnt.innerHTML = Cart.length;
        DisplayCart(Cart);
    };

    window.delelement = function (index) {
        Cart.splice(index, 1);
        localStorage.setItem("cartitem", JSON.stringify(Cart));
        DisplayCart(Cart);
        if (count) cnt.innerHTML = Cart.length;
    };

    // To Load the saved command

    const storedCommand = JSON.parse(localStorage.getItem("cartitem"));
    if (storedCommand) {
        Cart = storedCommand;
        DisplayCart(Cart)
        if (count) count.innerHTML = Cart.length;
    }
    cmd.addEventListener('click', () => {
        window.location.href = "Billing.html";
    })
})


const product = [
    {
        id: 1,
        imagurl:
            "https://dpqemkjot00yr.cloudfront.net/sales-product/thumb/dubleburger-fries1-1738064928.jpg",
        title: "The OG Stack",
        price: 20
    },
    {
        id: 2,
        imagurl:
            "https://ca-times.brightspotcdn.com/dims4/default/5cf7af0/2147483647/strip/true/crop/6667x4167+0+0/resize/2000x1250!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F90%2F8e%2Fd4b39213406d90dee65545b9a7d1%2Frec-burgerking.jpg",
        title: "Old Town Burger",
        price: 16
    },
    {
        id: 3,
        imagurl:
            "https://images.ctfassets.net/hhv516v5f7sj/5I8cfYax7g9KgEsesfYr8g/ee511440b5655a691b57b852e4edd903/impossibe-homepage-hero-floating-image-3__3_.png?w=3840&q=75&fm=webp",
        title: "MacDonald’s Burger",
        price: 7
    },
    {
        id: 4,
        imagurl:
            "https://www.averiecooks.com/wp-content/uploads/2016/06/12superfoodssalad-9.jpg",
        title: "Grill Master Special",
        price: 9
    },
    {
        id: 5,
        imagurl:
            "https://www.weightloss.com.au/assets/Uploads/Recipes/healthy-chicken-salad-lge.jpg",
        title: "Mac & Stack",
        price: 16
    }
];

const categories = [...product];
let Cart = [];
let counter = 0;

function command(array) {
    const rootage = document.getElementById("rootage");

    let total = 0;
    let content = ``;
    let rows = ``;
    let columns = ``;

    // Loop through the array
    array.forEach(element => {
        total += element.price;
        rows += `
            <tr>
                <td>${element.title}</td>
                <td>${element.id}</td>
                <td> $ ${element.price} .00</td>
            </tr>
        `;
    });

    columns = `
            <tr>
                <th>Item</th>
                <th>Id</th>
                <th>Price</th>
            </tr>
        `;

    content =
        `
                <div class=Company-details>
                    <p><strong> Site Name:</strong> Restaurant Command</p>
                    <p><strong>Email Address:</strong>RestaurantCmd@gmail.com</p>
                    <p><strong>Address:<strong> 152B street, Kinshasa, Democratic Republic of Congo</p>
                </div>
                
                <table class="invoice-table">
                    <thead>
                        ${columns}
                    </thead>
                    <tbody id="invoice-tems">
                        ${rows}
                    <tbody>
                </table>
                <div class="total" Total:>$ ${total.toFixed(2)}</div>
            `;
    rootage.innerHTML = content;
}
