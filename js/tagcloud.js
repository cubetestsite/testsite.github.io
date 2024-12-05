const radius = 100; // Radius of the globe
// const Yradius = 100;
const tagElements = Array.from(document.querySelectorAll('.tag')); // Retrieve all .tag elements
const tagCloud = document.getElementById("tag-cloud");
let angleX = Math.PI / 1000; // Default rotation speed on X-axis
let angleY = Math.PI / 1000; // Default rotation speed on Y-axis
let isHovered = false; // Flag to stop rotation on hover

// Generate spherical coordinates for each tag
tagElements.forEach((tag, i) => {
  const theta = Math.acos(-1 + (2 * i) / tagElements.length);
  const phi = Math.sqrt(tagElements.length * Math.PI) * theta;

  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);

  tag.dataset.x = x;
  tag.dataset.y = y;
  tag.dataset.z = z;
});

// Render Tags in 3D Space
function render() {
  if (!isHovered) {
    tagElements.forEach((tag) => {
      const x = parseFloat(tag.dataset.x);
      const y = parseFloat(tag.dataset.y);
      const z = parseFloat(tag.dataset.z);

      // Rotate around X-axis
      const rotatedX = x * Math.cos(angleX) - z * Math.sin(angleX);
      const rotatedZ = x * Math.sin(angleX) + z * Math.cos(angleX);

      // Rotate around Y-axis
      const rotatedY = y * Math.cos(angleY) - rotatedZ * Math.sin(angleY);
      const finalZ = y * Math.sin(angleY) + rotatedZ * Math.cos(angleY);

      tag.dataset.x = rotatedX;
      tag.dataset.y = rotatedY;
      tag.dataset.z = finalZ;

      // Scale and position
      const scale = 200 / (200 - finalZ); // Perspective scaling
      const translateX = (rotatedX * scale) + tagCloud.offsetWidth / 100;
      const translateY = (rotatedY * scale) + tagCloud.offsetHeight / 100;

      tag.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${scale})`;
      tag.style.opacity = scale / 1.5;
    });
  }

  requestAnimationFrame(render);
}

// Hover Effect
tagCloud.addEventListener("mouseover", () => {
  isHovered = true; // Stop rotation on hover
});

tagCloud.addEventListener("mouseout", () => {
  isHovered = false; // Resume rotation on mouse out
});

render();