// Get the UI Elements
let add_to_cartBtn = document.querySelectorAll(".add-to-cart");

// Add Event Listeners
for (let i = 0; i < add_to_cartBtn.length; i++) {
    add_to_cartBtn[i].addEventListener("click", (e) => {
        let productsName =
            document.querySelectorAll(".product-name")[i].innerText;
        let productsDetail =
            document.querySelectorAll(".product-item p")[i].innerText;
        let productsPrice =
            document.querySelectorAll(".product-price h6")[i].innerText;

        createCartItem(productsName, productsDetail, productsPrice);

        e.preventDefault();
    });
}

// Define FUnctions
function createCartItem(productName, productDetail, productPrice) {
    let cartItems = document.querySelector(".cart-items");
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItems.appendChild(cartItem);
    cartItem.innerHTML = `
    
    <h6>${productName}</h6>
    <p>${productDetail}</p>
    <div class="cart-price d-flex justify-content-between mx-1">
    <h6>${productPrice}</h6>
    <a class="remove-btn" href="#">Remove</a>
    </div>
    `;
    cartItems += cartItem;

    let remove_to_cartBtn = document.querySelectorAll(".remove-btn");

    for (let i = 0; i < remove_to_cartBtn.length; i++) {
        remove_to_cartBtn[i].addEventListener("click", (e) => {
            e.target.parentElement.parentElement.remove();
        });
    }
}
