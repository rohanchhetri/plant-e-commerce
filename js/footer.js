document.querySelectorAll(".footer").forEach((footer) => {
  footer.innerHTML = `
  <div class="footer-content">
    <div class="footer-content1">
      <p>Contact Us</p>
      <hr style="width: 100px; border: 1px solid black" />
      <ul class="footer-items">
        <span class="footer-col-1">122 Mississauga</span>
        <span class="footer-col-1">weCare@gmail.com</span>
        <span class="footer-col-1">1234567890</span>
      </ul>
    </div>
    <div class="footer-content2">
      <p>Qucik Links</p>
      <hr style="width: 100px; border: 1px solid black" />
      <ul class="footer-items">
        <span class="footer-col-2">Home</span>
        <span class="footer-col-2" onclick="goToPage('product.html')"
          >Products</span
        >
        <span class="footer-col-2">Shop</span>
        <span class="footer-col-2" onclick="goToPage('about.html')"
          >About</span
        >
      </ul>
    </div>
    <div class="footer-content3">
      <p>Follow Us</p>
      <hr style="width: 100px; border: 1px solid black" ; />
      <ul class="footer-items">
        <span><i class="fa-brands fa-facebook"></i> Facebook</span>
        <span><i class="fa-brands fa-instagram"></i> Instagram</span>
        <span><i class="fa-brands fa-tiktok"></i> Youtube</span>
        <span><i class="fa-brands fa-linkedin"></i> LinkedIn </span>
      </ul>
    </div>
  </div>
  <div
    class="footer-bottom"
    style="
      text-align: center;
      background: #336622;
      color: white;
      padding: 20px 0;
    "
  >
    <p>&copy; 2023 We Care Nature</p>
  </div>`;
});
