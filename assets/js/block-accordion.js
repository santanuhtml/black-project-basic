function initializeAccordion(accordionId) {
  var acc = document.querySelectorAll(`#${accordionId} .o-accordion__button`);
  var allPanels = document.querySelectorAll(`#${accordionId} .o-accordion__content`);
  var allIcons = document.querySelectorAll(`#${accordionId} .o-accordion__icon`);

  acc.forEach(function(button, i) {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      var icon = this.querySelector('.o-accordion__icon');

      // Close other panels within this accordion
      allPanels.forEach(function(item, index) {
        if (item !== panel && item.style.maxHeight) {
          item.style.maxHeight = null;
          acc[index].classList.remove('active');
          allIcons[index].innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
        }
      });

      // Toggle the clicked panel
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        icon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
      }
    });
  });

  // Open the first accordion by default
  var firstActive = document.querySelector(`#${accordionId} .o-accordion__button.active`);
  if (firstActive) {
    firstActive.click();
  }
}

// Initialize accordions by passing their unique IDs
initializeAccordion('accordion1');
initializeAccordion('accordion2');
