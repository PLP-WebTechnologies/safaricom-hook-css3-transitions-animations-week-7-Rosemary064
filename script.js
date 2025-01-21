function toggleAnimation() {
    const element = document.getElementById("animatedElement");
    element.classList.add("slideInElement");
  
    // Reset the animation after it's done
    element.addEventListener('animationend', function() {
      element.classList.remove("slideInElement");
    });
  }
  
  document.getElementById("animateButton").addEventListener("click", toggleAnimation);
  