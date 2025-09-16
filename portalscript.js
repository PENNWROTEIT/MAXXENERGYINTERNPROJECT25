// ===== Login Button Revolve Effect =====
document.getElementById("loginBtn").addEventListener("click", function() {
  let container = document.querySelector(".glass-container");

  // Get username and password from input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Call backend login function
  loginToBackend(username, password).then(() => {
    // Rotate animation
    container.style.transform = "rotateY(360deg)";

    // Redirect after animation
    setTimeout(() => {
      window.location.href = "userpagebyPWIThtml.html"; // Change to your dashboard page
    }, 1000);
  }).catch((error) => {
    alert("Login failed: " + error.message);
  });
});

// ===== Video Background Toggle =====
const videoSources = [
  "videos/abstract-motion.mp4",
  "videos/tech-grid.mp4",
  "videos/energy-wave.mp4"
];

const heroVideo = document.querySelector(".hero-video");
const buttons = document.querySelectorAll(".video-options button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    heroVideo.src = videoSources[index];
    heroVideo.play();
  });
});




// ===== BACKEND CODE =====

// Example: call this inside an async function or event handler
async function loginToBackend(username, password) {
  try {
    const response = await fetch("http://127.0.0.1:4040/inspect/http", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error("Login failed");

    const data = await response.json();
    console.log("Login success:", data);
    // You can add redirect or UI update here
  } catch (error) {
    console.error("Error:", error);
  }
}
