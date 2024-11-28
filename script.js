// script.js
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
  
      // Toggle active class
      faqItem.classList.toggle('active');
  
      // Close other active items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
    });
  });