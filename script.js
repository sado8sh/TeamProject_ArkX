const favoriteCars = [
  {
    name: "BMW M5 CS",
    owner: "Saad",
    image: "https://autonews-mag.com/images/5NCR_wWWE2Qhd.jpg",
    description: "A high-performance sedan with 627hp and gold bronze wheels.",
    wikiUrl: "https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m5-cs-2021.html"
  },
  {
    name: "BMW M8 Competition",
    owner: "Saad",
    image: "https://i.pinimg.com/736x/9e/4a/e3/9e4ae35caaa6745dd7e948713209b2e2.jpg",
    description: "The BMW M8 Competition is a high-performance luxury sports car with 617hp, all-wheel drive, and a sleek, aggressive design that blends power and elegance.",
    wikiUrl: "https://www.bugatti.com/en/models/chiron-sport"
  },
  {
    name: "BUGATTI Chiron Sport",
    owner: "Hamza",
    image: "https://bugatti.imgix.net/677aa8b9531541bbada7c4e0/chiron-sport-og.jpg",
    description: "The BUGATTI Chiron Sport is a fast, powerful, and light super car. It has 1,500 horsepower and is built for speed and sharp handling. It also has a sporty design and high-quality materials.",
    wikiUrl: "https://www.bugatti.com/en/models/chiron-sport"
  }, 
  
  {
    name: "Tesla Model 3",
    owner: "Achraf",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    description: "Sleek, all-electric sedan that combines cutting-edge technology with impressive performance and range.",
    wikiUrl: "https://en.wikipedia.org/wiki/Tesla_Model_3"
  },
  {
    name: "Rivian R3",
    owner: "Achraf",
    image: "https://hips.hearstapps.com/hmg-prod/images/02-rivian-r3-65ea14aa89e6c.jpg?crop=0.864xw:0.724xh;0.101xw,0.276xh&resize=2048:*",
    description: "Compact electric SUV designed for adventure, blending rugged capability with modern tech in a sleek, city-friendly package.",
    wikiUrl: "https://en.wikipedia.org/wiki/Rivian_R3"
  },
  {
    name: "BMW I8 Hybrid Sports",
    owner: "Hamza",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/khMY0sKjSUWaIDjHGMqP",
    description: "stylish hybrid sports car. It uses both a petrol engine and electric motor for strong performance. It’s fast, eco-friendly, and has a futuristic design.",
    wikiUrl: "https://www.drive.com.au/news/bmw-i8-hybrid-sports-car-revealed/"
  }, 
  {
    name: "Mercedes-AMG GT63S",
    owner: "SAAD",
    image: "https://www.mercedes-benz.fr/content/dam/hq/passengercars/cars/amg-gt/amg-gt-4-door-coupe-e-performance-x290-pi/overview/equipment/08-2023/images/mercedes-amg-gt-63-se-perf-x290-equipment-exterior-aerodynamics-package-764x573-08-2023.jpg/1740018850191.jpg?im=Crop,rect=(0,0,764,573);Resize=(512,384)",
    description: "A powerful German beast with stunning design and power.",
    wikiUrl: "https://en.wikipedia.org/wiki/Mercedes-AMG_GT"
  },
  {
    name: "Mercedes-AMG G63 6x6",
    owner: "SAAD",
    image: "https://i.gaw.to/content/photos/12/16/121625_Mercedes-Benz_G63_AMG_6X6_plus_imposant_que_l_Hummer_H1.jpg?1024x640",
    description: "A six‑wheeled German juggernaut, commanding attention with brute strength .",
    wikiUrl: "https://en.wikipedia.org/wiki/Mercedes-AMG_G_63_6x6"
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