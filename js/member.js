members = [
  {
    name: "Rohan Chhetri",
    role: "Founder/CEO",
    image: "/src/members/rohan.jpg",
    social: [
      "https://www.facebook.com/me.rohanchhetri/",
      "fa-twitter",
      "https://www.instagram.com/me_rohanchhetri/",
      "https://www.linkedin.com/in/rohanchhetri/",
      "https://github.com/rohanchhetri/",
    ],
    quote:
      "As the Founder of We Care Nature, I'm committed to promoting green living through our platform and responsibly sourced plants.",
  },
  {
    name: "Samir Mabo",
    role: "Markeeting Manager",
    image: "/src/members/samir.png",
    social: [
      "https://www.facebook.com/profile.php?id=100077139817739",
      "fa-twitter",
      "https://www.instagram.com/samir_mabo",
      "fa-linkedin",
      "fa-github",
    ],
    quote:
      "As Marketing Manager at We Care Nature, I bridge nature's beauty with your world, crafting impactful strategies to inspire a greener lifestyle.",
  },
  {
    name: "Biplov Thakur",
    role: "Operation Manager",
    image: "/src/members/biplov.jpg",
    social: [
      "https://www.facebook.com/biplov.thakurkc",
      "fa-twitter",
      "fa-instagram",
      "fa-linkedin",
      "fa-github",
    ],
    quote:
      "As Operation Manager at We Care Nature, I ensure smooth operations, from sourcing to delivery, so you can enjoy nature's beauty effortlessly.",
  },
  {
    name: "Dhruv Dhingra",
    role: "Senior Developer",
    image: "/src/members/dhruv.jpg",
    social: [
      "https://www.facebook.com/profile.php?id=100091575960426",
      "fa-twitter",
      "fa-instagram",
      "fa-linkedin",
      "fa-github",
    ],
    quote:
      "As We Care Nature's Senior Developer, I drive tech innovation for seamless nature experiences.",
  },
  {
    name: "Bishanta Mahato",
    role: "Product Manager",
    image: "/src/members/bishanta.jpg",
    social: [
      "https://www.facebook.com/bishant.mahato.7/",
      "fa-twitter",
      "fa-instagram",
      "fa-linkedin",
      "fa-github",
    ],
    quote:
      "As Product Manager at We Care Nature, I sculpt experiences that seamlessly blend nature's wonders with your lifestyle.",
  },
];

members.forEach((member) => {
  let memberContainer = document.querySelector(".members");
  let memberDiv = document.createElement("div");
  memberDiv.classList.add("circle");
  memberDiv.innerHTML = `<img
            src="${member.image}"
            alt=""
            width="240px"
            height="240px"
            style="border-radius: 50%"
            id="member-image"
          />
          <p class="person" id="name">${member.name}</p>
          <p class="person" id="positon">${member.role}</p>
            <div class="social">
                <i class="fa-brands fa-facebook link" onclick="goToPage('${member.social[0]}')"> </i>
                <i class="fa-brands fa-twitter link" onclick="goToPage('${member.social[1]}')"></i>
                <i class="fa-brands fa-instagram link" onclick="goToPage('${member.social[2]}')"></i>
                <i class="fa-brands fa-linkedin link" onclick="goToPage('${member.social[3]}')"></i>
                <i class="fa-brands fa-github link" onclick="goToPage('${member.social[4]}')"></i>
            </div>
            <q id="quote">
              ${member.quote}
            </q>`;
  memberContainer.appendChild(memberDiv);
});
