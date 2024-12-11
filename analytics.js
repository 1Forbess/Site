// document.addEventListener("DOMContentLoaded", () => {
//     const data = JSON.parse(localStorage.getItem("studentData")) || [];

//     if (data.length === 0) {
//         alert("Нет данных для аналитики.");
//         return;
//     }

//     const totalStudents = data.length;
//     const averageGrade = (data.reduce((sum, student) => sum + student.grade, 0) / totalStudents).toFixed(2);
//     const topStudents = data.filter(student => student.rating === "Высокий").length;

//     document.getElementById("total-students").textContent = totalStudents;
//     document.getElementById("average-grade").textContent = `${averageGrade}%`;
//     document.getElementById("top-students").textContent = topStudents;
// });




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
