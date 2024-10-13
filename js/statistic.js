document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.eb-progress-bar').forEach(bar => {
    let percentage = parseInt(bar.getAttribute('data-percentage'), 10);
    
    let value = 0;
    const interval = setInterval(() => {
      value++;
      bar.style.setProperty('--eb-progress-value', value);
      bar.setAttribute('data-percentage', value); 
      if (value >= percentage) {
        clearInterval(interval);
      }
    }, 20);
  });
});
