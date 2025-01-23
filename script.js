document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let cart = [];

    
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            
            cart.push({ name, price });

            
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = ''; 
        let total = 0;

        cart.forEach(item => {
            total += item.price;

            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });

        totalPrice.textContent = total.toFixed(2);
    }
});
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.classList.remove('dark-mode'); 
    } else {
        body.classList.add('dark-mode'); 
    }
});
