const favoriteCars = [
  {
    name: "BMW M5 CS",
    owner: "Saad",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "A high-performance sedan with 627hp and gold bronze wheels.",
    wikiUrl: "https://en.wikipedia.org/wiki/BMW_M5"
  },
  {
    name: "Nissan GT-R R35",
    owner: "Amine",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "A Japanese legend known as 'Godzilla' with AWD and twin turbo V6.",
    wikiUrl: "https://en.wikipedia.org/wiki/Nissan_GT-R"
  },
  {
    name: "Tesla Model 3",
    owner: "Achraf",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    description: "Sleek, all-electric sedan that combines cutting-edge technology with impressive performance and range.",
    wikiUrl: "https://en.wikipedia.org/wiki/Tesla_Model_3"
  },
  {
    name: "Mercedes-AMG GT63S",
    owner: "SAAD",
    image: "https://www.mercedes-benz.fr/content/dam/hq/passengercars/cars/amg-gt/amg-gt-4-door-coupe-e-performance-x290-pi/overview/equipment/08-2023/images/mercedes-amg-gt-63-se-perf-x290-equipment-exterior-aerodynamics-package-764x573-08-2023.jpg/1740018850191.jpg?im=Crop,rect=(0,0,764,573);Resize=(512,384)",
    description: "A powerful German beast with stunning design and power.",
    wikiUrl: "https://en.wikipedia.org/wiki/Mercedes-AMG_GT"
  }
];

const container = document.getElementById("car-section");

favoriteCars.forEach((car, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-aos", "fade-up");

  const liked = localStorage.getItem(`car-${index}`) === "liked";

  card.innerHTML = `
    <img src="${car.image}" alt="${car.name}">
    <div class="card-content">
      <h2>${car.name}</h2>
      <p><strong>Chosen by:</strong> ${car.owner}</p>
      <p>${car.description}</p>
      <button class="${liked ? 'liked' : ''}">
        ${liked ? 'Liked ❤️' : 'Like ❤️'}
      </button>
      <a href="${car.wikiUrl}" target="_blank" class="details-button">View More Details</a>
    </div>
  `;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    const liked = btn.classList.toggle("liked");
    btn.textContent = liked ? 'Liked ❤️' : 'Like ❤️';
    localStorage.setItem(`car-${index}`, liked ? "liked" : "notLiked");
  });

  container.appendChild(card);
});
