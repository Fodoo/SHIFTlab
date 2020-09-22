"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const inputForm = document.querySelector(".table__input"),
        btnForm = document.querySelector(".table__btn"),
        column = document.querySelectorAll("[data-search]"),
        textUnderForm = document.querySelector(".table__text");

    search();

    function search() {
        btnForm.addEventListener("click", (e) => {
            e.preventDefault();
            const reg = new RegExp(inputForm.value, "ig");
            let count = 0;

            if (inputForm.value != 0) {
                column.forEach((item) => {
                    item.style.backgroundColor = "#ffffff";
                    item.style.color = "#000000";
                    if (item.textContent.match(reg)) {
                        item.style.backgroundColor = "red";
                        item.style.color = "#ffffff";
                        count++;
                    }
                });
            }

            if (count == 0) {
                textUnderForm.textContent = "Ничего не найдено";
            } else {
                textUnderForm.textContent = "Найдено: " + count;
            }
        });
    }
});
