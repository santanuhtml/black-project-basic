

document.addEventListener("DOMContentLoaded", function () {
    // Get the modals and the buttons
    //var modals = document.querySelectorAll(".modal");
    var openBtns = document.querySelectorAll(".openModalBtn");
    var closeBtns = document.querySelectorAll(".o-modal__close");

    // Function to open the modal
    function openModal(targetModalId) {
        document.body.classList.add("body-fixed");
        var targetModal = document.getElementById(targetModalId);
        targetModal.style.display = "block";
    }

    // Function to close the modal
    function closeModal(targetModalId) {
        document.body.classList.remove("body-fixed");
        var targetModal = document.getElementById(targetModalId);
        targetModal.style.display = "none";
    }

    // Event listeners for opening the modals
    openBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var targetModalId = btn.getAttribute("data-target");
            openModal(targetModalId);
        });
    });

    // Event listeners for closing the modals
    closeBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var targetModalId = btn.getAttribute("data-target");
            closeModal(targetModalId);
        });
    });
});

