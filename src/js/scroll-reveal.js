const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#for-house, #plants, .plants-care-text, .plants-care-title,
  .container-plants-care-right, .container-info-products, .container-products,
  .insta-info, .img-insta, #contact
  `,
  { interval: 100 }
);
