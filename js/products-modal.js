(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-products-open]"),
    closeModalBtn: document.querySelector("[data-modal-products-close]"),
    modal: document.querySelector("[data-modal-products]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-products")
    refs.modal.classList.toggle("is-hidden");
  }
})();