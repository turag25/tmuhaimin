document.addEventListener('DOMContentLoaded', () => {
  const introModal = document.getElementById('introDialog');
  const sureButton = document.querySelector('.sure-btn');
  const serviceWrapper = document.querySelector('.center-wrapper');
  const openButtons = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('.close, .close-payment');
  const modals = document.querySelectorAll('.modal');
  const paymentModal = document.getElementById('paymentModal');
  const packageNameElement = document.getElementById('package-name');
  const paymentMessageElement = document.getElementById('payment-message');
  const proceedButton = document.getElementById('proceedButton');

  // Show intro modal on load
  introModal.style.display = 'block';
  serviceWrapper.style.display = 'none';

  // Handle Sure! button click
  sureButton.addEventListener('click', () => {
    introModal.style.display = 'none';
    serviceWrapper.style.display = 'block';
  });

  // Open service modal
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modals.forEach(m => m.style.display = 'none'); // hide all modals
        modal.style.display = 'block';
      }
    });
  });

  // Close modal
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      modals.forEach(modal => modal.style.display = 'none');
    });
  });

  // Open payment modal when selecting a package
  window.showPaymentModal = function(serviceType, packageType) {
    packageNameElement.textContent = `${serviceType} - ${packageType}`;
    paymentMessageElement.textContent = `Please select a payment method to proceed with the ${serviceType} ${packageType} package.`;
    paymentModal.style.display = 'block';
  };

  proceedButton.addEventListener('click', () => {
    alert('Proceeding to payment!');
    paymentModal.style.display = 'none';
  });
});
