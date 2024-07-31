document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('purchase-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Item added to cart!');
    });
});
