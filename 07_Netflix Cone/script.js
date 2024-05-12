function toggleDetails(element) {
    const detailsElement = element.nextElementSibling;
    detailsElement.style.display = detailsElement.style.display === 'none' ? 'block' : 'none';
  }