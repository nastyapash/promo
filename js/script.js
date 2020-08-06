const openModalButton = document.getElementsByClassName("open-modal");
const openModalButtonList = Array.from(openModalButton);
const closeModalButton = document.getElementsByClassName("close-modal");
const closeModalButtonList = Array.from(closeModalButton);
const modal = document.getElementsByClassName("modal");
const modalList = Array.from(modal);

function openModal(){
    openModalButtonList.forEach(function(elem) {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            modalList.forEach((function (el) {
                if (el.getAttribute("data-id") === elem.getAttribute("data-id")) {
                    el.classList.toggle("active");
                }
            }))
        })
    })
}
openModal()

function closeModal() {
    closeModalButtonList.forEach(function(elem) {
        elem.addEventListener('click', function (event) {
            modalList.forEach((function (el) {
                if (el.getAttribute("data-id") === elem.getAttribute("data-id")) {
                    el.classList.remove("active");
                }
            }))
        })
    })
}
closeModal()
