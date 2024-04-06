document.querySelectorAll(".footer").forEach((footer) => {
  footer.innerHTML = `
  <div class="newsletter">
    <p>Newsletter</p>
    <div>
      Subscribe to our newsletter to get updates on our latest offers!
    </div>
    <div><input type="email" /><button>Subscribe</button></div>
    <span style="display: none" id="subscribemsg"></span>
  </div>
  <div class="footer-content">
    <div class="footer-content1">
      <p>Contact Us</p>
      <hr style="width: 100px; border: 1px solid black" />
      <ul class="footer-items">
        <span class="footer-col-1">911 Mississauga Rd, ON</span>
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
        <span><i class="fa-brands fa-tiktok"></i> Tiktok</span>
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
    <p>&copy; 2024 We Care Nature</p>
  </div>
`;
});

function ntg() {
  document
    .querySelector(".newsletter button")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let validEmail = document
        .querySelector(".newsletter input")
        .value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      let msg = document.querySelector(".newsletter #subscribemsg");

      if (validEmail) {
        msg.innerHTML = "Thank you for subscribing to our newsletter";
        msg.style.display = "block";
        msg.style.color = "green";
      } else {
        msg.innerHTML = "Please enter a valid email";
        msg.style.display = "block";
        msg.style.color = "red";
      }
    });
}
ntg();
