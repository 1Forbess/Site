// Обработка кнопок для скачивания
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".download-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const fileName = button.getAttribute("data-file");
            const link = document.createElement("a");
            link.href = `reports/${fileName}`; // Путь к файлу
            link.download = fileName; // Имя файла
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
// Функция для открытия модального окна
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Открываем модальное окно сразу при загрузке страницы
window.onload = () => {
    openModal();

    let countdown = 3; // Начальное значение таймера
    const timerElement = document.getElementById('timer');
    
    // Обновляем таймер каждую секунду
    const timerInterval = setInterval(() => {
        countdown--; // Уменьшаем счетчик на 1
        timerElement.textContent = countdown; // Обновляем отображение таймера

        // Если время истекло, останавливаем таймер и перенаправляем
        if (countdown <= 0) {
            clearInterval(timerInterval); // Останавливаем таймер
            window.location.href = 'index.html'; // Переход на главную страницу
        }
    }, 1000); // Обновляем каждую секунду
};