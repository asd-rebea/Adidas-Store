document.addEventListener("DOMContentLoaded", function () {
    // تحديد جميع أزرار Add to Cart
    const addToCartButtons = document.querySelectorAll(".product-card button:nth-of-type(2)");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            // إظهار إشعار التوست عند الضغط على الزر
            Toastify({
                text: "Item added to cart successfully!",
                duration: 3000, // ممدة ظهور الإشعار (3 ثوانٍ)
                close: true,
                gravity: "bottom", // يظهر من الأسفل (أو top)
                position: "right", // يظهر في الجهة اليمنى
                stopOnFocus: true, // إيقاف المؤقت عند تحريك الماوس فوق الإشعار
                style: {
                    background: "linear-gradient(to right, #111111, #e63946)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)"
                }
            }).showToast();
        });
    });
});