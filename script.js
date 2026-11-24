const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    themeToggle.textContent = 'Dark Mode';
  } else {
    themeToggle.textContent = 'Light Mode';
  }
});

const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const selectedCategory = button.getAttribute('data-category');

    menuCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category');
      if (selectedCategory === 'all' || selectedCategory === cardCategory) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxText = document.getElementById('lightboxText');
const closeLightbox = document.getElementById('closeLightbox');

galleryItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    lightboxImg.src = img.src;
    lightboxText.textContent = caption.textContent;
    lightbox.classList.add('show');
  });
});

closeLightbox.addEventListener('click', function () {
  lightbox.classList.remove('show');
});

lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

const bookingForm = document.getElementById('bookingForm');
const bookingConfirmation = document.getElementById('bookingConfirmation');
const confirmDetails = document.getElementById('confirmDetails');
const newBookingBtn = document.getElementById('newBookingBtn');

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('guestName').value;
  const date = document.getElementById('bookingDate').value;
  const time = document.getElementById('bookingTime').value;
  const guests = document.getElementById('guestCount').value;
  const zone = document.getElementById('seatingZone').value;

  confirmDetails.innerHTML =
    'Thank you, <strong>' + name + '</strong>!<br>' +
    'Your table for <strong>' + guests + '</strong> in the <strong>' + zone + '</strong> ' +
    'is booked on <strong>' + date + '</strong> at <strong>' + time + '</strong>.';

  bookingForm.classList.add('hidden');
  bookingConfirmation.classList.remove('hidden');
});

newBookingBtn.addEventListener('click', function () {
  bookingForm.reset();
  bookingConfirmation.classList.add('hidden');
  bookingForm.classList.remove('hidden');
});
