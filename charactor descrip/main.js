// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Fun Fact Button
  const funFacts = [
    "Arcana mastered shadow manipulation by observing collapsing stars.",
    "She defeated a rebellion in her universe with just a whisper.",
    "Arcana’s favorite hobby is observing the birth of new universes.",
    "Her most trusted ally is a sentient shadow named Nyx."
  ];
  
  document.getElementById("funFactButton").addEventListener("click", () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    alert(`Fun Fact: ${randomFact}`);
  });
  
  // Background Music Toggle
  const audio = new Audio("background-music.mp3");
  audio.loop = true;
  
  document.getElementById("musicToggle").addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      document.getElementById("musicToggle").textContent = "Pause Music";
    } else {
      audio.pause();
      document.getElementById("musicToggle").textContent = "Play Music";
    }
  });
  
  // Countdown Timer
  function updateCountdown() {
    const eventDate = new Date("2024-12-31T00:00:00");
    const now = new Date();
    const timeRemaining = eventDate - now;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);
  
    document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  
  // Lightbox
  const images = document.querySelectorAll(".image img");
  const lightbox = document.getElementById("lightbox");
  
  images.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      const imgElement = document.createElement("img");
      imgElement.src = img.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(imgElement);
    });
  });
  
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  window.addEventListener("scroll", () => {
    const description = document.querySelector(".description");
    const descriptionPosition = description.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
  
    if (descriptionPosition < screenPosition) {
      description.classList.add("active"); // Add the active class
    } else {
      description.classList.remove("active"); // Remove for hiding on scroll up
    }
  });
  
  // Ensure description fades in on scroll or page load
window.addEventListener("scroll", () => {
    const description = document.querySelector(".description");
    const descriptionPosition = description.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (descriptionPosition < screenPosition) {
      description.classList.add("active");
    }
  });
  function toggleTheme() {
    const body = document.body;
    const isLight = body.style.background === 'rgb(244, 244, 249)';
    body.style.background = isLight ? '#333' : '#f4f4f9';
    body.style.color = isLight ? '#f4f4f9' : '#333';
}
  