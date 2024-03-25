let faqLists = [
  {
    question: "What type of plants do you offer?",
    answer:
      "We offer a wide variety of indoor and outdoor plants, including succulents, cacti, flowering plants, foliage plants, herbs, and more.",
  },
  {
    question: "How often should I water my plants?",
    answer:
      "The watering frequency depends on the type of plant, its size, and environmental factors. We provide care instructions for each plant to help you determine the appropriate watering schedule.",
  },
  {
    question: "Do you offer plant care tips?",
    answer:
      "Yes, we provide care tips for each plant to ensure its health and longevity. Our team is also available to answer any questions you may have about plant care.",
  },
  {
    question: "What potting mix should I use for my plants?",
    answer:
      "We recommend using a well-draining potting mix specific to the type of plant you have. Our staff can assist you in selecting the right potting mix for your plants.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer local delivery services for our plants. Delivery fees may vary depending on the distance and size of the order.",
  },
  {
    question: "Can I return or exchange a plant if I'm not satisfied?",
    answer:
      "We strive to ensure customer satisfaction. If you're not satisfied with your purchase, please contact us within [insert timeframe] for return or exchange options.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, we offer gift cards that can be used for purchasing plants and accessories in-store or online.",
  },
  {
    question: "Are your plants pet-friendly?",
    answer:
      "While many of our plants are safe for pets, some may be toxic if ingested. We provide information on pet-friendly plants and can assist you in selecting the right plants for your home environment.",
  },
  {
    question: "What should I do if my plant is not thriving?",
    answer:
      "If you're experiencing issues with your plant, please reach out to us for assistance. We can provide troubleshooting tips and advice to help your plant thrive.",
  },
  {
    question: "Do you offer workshops or educational events?",
    answer:
      "Yes, we regularly host workshops and educational events on plant care, propagation, and more. Check our website or social media pages for upcoming events and workshops.",
  },
];

let faqItems = document.querySelector(".faq-lists");
faqItems.innerHTML = "";
faqLists.forEach((faq) => {
  let faqItem = document.createElement("div");
  faqItem.classList.add("faq");
  faqItem.innerHTML = `
  <div class="question">
      <p>${faq.question}</p>
      <i class="fa-solid fa-plus" style="color: #000"></i>
  </div>
  <div class="ans">
      <p>${faq.answer}</p>
  </div>`;
  faqItems.appendChild(faqItem);
});

$(".question").click(function () {
  $(this).next().slideToggle();
  $(this).find("i").toggleClass("fa-plus fa-minus");
});
