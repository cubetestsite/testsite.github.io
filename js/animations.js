document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // Use the viewport as the container
    threshold: 0.5, // Trigger when 50% of the element is in view
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add visible class on first scroll
        observer.unobserve(entry.target); // Stop observing the element
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Target the element(s) you want to observe
  const targets = document.querySelectorAll('.animate-on-scroll-carousel, .animate-on-scroll-testimonial, .animate-on-scroll-testimonial-author');
  targets.forEach(target => {
    observer.observe(target);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var scrollButtonRight = document.getElementById("scrollButtonRight");
  var scrollButtonLeft = document.getElementById("scrollButtonLeft");
  var container = document.getElementById("scrollContainer");

  if (scrollButtonRight && scrollButtonLeft && container) {
    scrollButtonRight.addEventListener("click", function () {
      var containerWidth = container.offsetWidth; // Visible width of the container
      var maxScrollLeft = container.scrollWidth - containerWidth; // Max scrollable distance

      // Check if at the end of the scrollable area
      if (container.scrollLeft >= maxScrollLeft - 1) {
        // Scroll back to the start (left: 0)
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll right by one container width or to the max scrollable position
        var newScrollPosition = Math.min(container.scrollLeft + containerWidth, maxScrollLeft);
        container.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
      }
    });

    scrollButtonLeft.addEventListener("click", function () {
      var containerWidth = container.offsetWidth; // Visible width of the container
      var newScrollPosition = Math.max(container.scrollLeft - containerWidth, 0); // Prevent scrolling into negative positions
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    });
  } else {
    console.error("One or more required elements are missing from the DOM.");
  }
});




