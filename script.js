// script.js

// Show alert when "Read More" is clicked
function showAlert() {
    alert("This feature is coming soon!");
  }
  
  // Handle form submission
  document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contactForm').reset(); // Clear the form
    } else {
      alert("Please fill out all fields.");
    }
  });