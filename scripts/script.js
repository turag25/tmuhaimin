function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  const toggleBtn = document.querySelector('.dark-mode-toggle');
  if (toggleBtn) toggleBtn.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}



// function openModal() {
//   const modal = document.getElementById('contactModal');
//   modal.style.display = 'flex';
// }

// function closeModal(event) {
//   const modal = document.getElementById('contactModal');
//   if (!event || event.target === modal || event.target.tagName === "SPAN") {
//     modal.style.display = 'none';
//   }
// }

// const orderModal = document.getElementById('orderModal');
// const orderBtn = document.getElementById('orderBtn');
// const closeOrder = document.getElementById('closeOrder');
// const serviceType = document.getElementById('serviceType');


// // Always make sure the button is enabled initially
// orderBtn.disabled = false;

// // Open and close the order modal
// orderBtn.onclick = () => orderModal.style.display = 'flex';
// closeOrder.onclick = () => orderModal.style.display = 'none';

// window.onclick = (e) => {
//   if (e.target === orderModal) orderModal.style.display = 'none';
// };

// // Function to show the correct service options based on the selected service
// function showOptions() {
//   // Hide all service options initially
//   document.querySelectorAll('.service-options').forEach(el => el.style.display = 'none');

//   // Get the selected service type and show the corresponding options
//   const selectedService = serviceType.value;
//   const activeServiceOptions = document.getElementById('options-' + selectedService);
//   if (activeServiceOptions) activeServiceOptions.style.display = 'block';
// }

// // Event listener for the service type dropdown change
// serviceType.addEventListener('change', showOptions);

// // Call the function initially to apply the correct visibility
// showOptions();

// document.addEventListener("DOMContentLoaded", function () {
//   const orderForm = document.getElementById("orderForm");

//   if (orderForm) {
//     orderForm.addEventListener("submit", function (e) {
//       e.preventDefault(); // Prevent default form submission
//       alert("Order submitted successfully!");

//       // Optionally reset the form or add more logic here
//       orderForm.reset();
//     });
//   }
// });






// CONTACT MODAL
function openModal() {
  const modal = document.getElementById('contactModal');
  modal.style.display = 'flex';
}

function closeModal(event) {
  const modal = document.getElementById('contactModal');
  if (!event || event.target === modal || event.target.tagName === "SPAN") {
    modal.style.display = 'none';
  }
}

// ORDER MODAL HANDLING
document.addEventListener("DOMContentLoaded", function () {
  const orderModal = document.getElementById('orderModal');
  const orderForm = document.getElementById("orderForm");
  const orderBtn = document.getElementById('orderBtn'); // submit button
  const openOrderModalBtn = document.getElementById('openOrderModal'); // opening trigger
  const closeOrder = document.getElementById('closeOrder');
  const serviceType = document.getElementById('serviceType');

  // 🔁 Show options based on selected service
  function showOptions() {
    document.querySelectorAll('.service-options').forEach(el => el.style.display = 'none');
    const selectedService = serviceType.value;
    const activeServiceOptions = document.getElementById('options-' + selectedService);
    if (activeServiceOptions) activeServiceOptions.style.display = 'block';
  }

  // 🟢 When "Order Now" button is clicked
  if (openOrderModalBtn) {
    openOrderModalBtn.addEventListener('click', () => {
      orderModal.style.display = 'flex';
      showOptions(); // display selected service fields immediately
    });
  }

  // 🔴 Close modal
  if (closeOrder) {
    closeOrder.addEventListener('click', () => {
      orderModal.style.display = 'none';
    });
  }

  // 🌫️ Close when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === orderModal) orderModal.style.display = 'none';
  });

  // 🔄 Update options on dropdown change
  if (serviceType) {
    serviceType.addEventListener('change', showOptions);
  }

  // ✅ Form submission behavior
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Order submitted successfully!");
      orderForm.reset();
      showOptions(); // reset form view
    });
  }

  // 👀 Call once on load to match initial selection
  showOptions();
});

