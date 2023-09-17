document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.querySelector('#open_modal_feedback');
    const modal = document.querySelector('#modal_feedback');
    const closeButton = modal.querySelector('.close_feedback');
    const form = document.querySelector('form');
    const checkbox = document.querySelector('input[name="privacy_feedback"]');

    // Обработчик клика на кнопку открытия модального окна
    openButton.addEventListener('click', function () {
        modal.style.display = "block"; // Показываем модальное окно
    });

    // Обработчик клика на крестик закрытия модального окна
    closeButton.addEventListener('click', function () {
        modal.style.display = "none"; // Скрываем модальное окно
    });

    // Обработчик клика вне модального окна - закрытие окна
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Если клик был сделан вне модального окна, скрываем его
        }
    });


});

history.replaceState(null, null, window.location.pathname);