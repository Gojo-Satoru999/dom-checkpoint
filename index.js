document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
            const price = parseFloat(item.dataset.price);
            total += quantity * price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    cartItems.forEach(item => {
        const plusButton = item.querySelector('.plus');
        const minusButton = item.querySelector('.minus');
        const deleteButton = item.querySelector('.delete');
        const likeButton = item.querySelector('.like');
        const quantityElement = item.querySelector('.quantity');

        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent, 10);
            quantityElement.textContent = quantity + 1;
            updateTotalPrice();
        });

        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent, 10);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});
