// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll to capabilities section
document.getElementById('scroll-btn').addEventListener('click', function() {
  document.getElementById('capabilities').scrollIntoView({ behavior: 'smooth' });
});

// Handle waitlist form submissions
function handleFormSubmit(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[name="email"]').value;
  
  // TODO: Replace with actual form submission logic
  console.log('Waitlist submission:', email);
  alert('Thank you! We\'ll be in touch soon.');
  e.target.reset();
}

document.getElementById('waitlist-form').addEventListener('submit', handleFormSubmit);
document.getElementById('cta-form').addEventListener('submit', handleFormSubmit);
