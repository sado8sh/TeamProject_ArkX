const favoriteCars = [
  {
    name: "BMW M5 CS",
    owner: "Saad",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "A high-performance sedan with 627hp and gold bronze wheels.",
  },
  {
    name: "Nissan GT-R R35",
    owner: "Amine",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "A Japanese legend known as 'Godzilla' with AWD and twin turbo V6.",
  },
  {
    name: "Ferrari F8 Tributo",
    owner: "Sara",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "Italian beauty with a 710hp V8. Sleek and ultra-fast.",
  },
  {
    name: "Mercedes-AMG GT",
    owner: "Youssef",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "A powerful German beast with stunning design and power.",
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
