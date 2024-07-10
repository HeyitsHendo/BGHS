document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.u-repeater-item');

    serviceItems.forEach(item => {
      item.addEventListener('click', function() {
        const isExpanded = this.classList.contains('expanded');

        // Collapse all expanded items
        serviceItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('expanded');
          }
        });

        // Toggle 'expanded' class on clicked item
        this.classList.toggle('expanded', !isExpanded);

        // Adjust font size dynamically based on content length
        const serviceDetails = this.querySelector('.service-details');
        if (serviceDetails) {
          const maxHeight = 300; // Maximum height in pixels before resizing
          const contentHeight = serviceDetails.scrollHeight;
          const fontSize = Math.min(16, 16 * maxHeight / contentHeight); // Adjust max font size as needed

          serviceDetails.style.fontSize = `${fontSize}px`;
        }
      });
    });

    // Close expanded item when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.expanded') && !event.target.closest('.u-repeater-item')) {
        serviceItems.forEach(item => {
          item.classList.remove('expanded');
        });
      }
    });
  });