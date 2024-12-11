// Проверяем наличие данных в localStorage и загружаем их
let students = JSON.parse(localStorage.getItem('students')) || [
    {
        id: 1,
        fio: 'Иванов Иван Иванович',
        course: 1,
        group: 'ПО1901',
        form: 'очное',
        type: 'грант',
        address: 'ул. Абая, 15, Астана',
        from: 'Атырау'
    },
    {
        id: 2,
        fio: 'Петрова Мария Александровна',
        course: 2,
        group: 'ПО1902',
        form: 'заочное',
        type: 'платка',
        address: 'ул. Сейфуллина, 28, Астана',
        from: 'Шымкент'
    }
];

// Функция для отображения статистики
function updateStatistics() {
    // Общее количество студентов
    document.getElementById('totalStudents').textContent = students.length;

    // Количество уникальных групп
    const groups = new Set(students.map(student => student.group));
    document.getElementById('totalGroups').textContent = groups.size;

    // Успеваемость (процент студентов на гранте)
    const grantStudents = students.filter(student => student.type === 'грант').length;
    const performance = (grantStudents / students.length) * 100;
    document.getElementById('performance').textContent = performance.toFixed(2) + '%';
}

// Функция для отображения данных в таблице
function displayStudents() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = ''; // Очищаем таблицу перед выводом данных

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.fio}</td>
            <td>${student.course}</td>
            <td>${student.group}</td>
            <td>${student.form}</td>
            <td>${student.type}</td>
            <td>${student.address}</td>
            <td>${student.from}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Функция для сортировки студентов
function sortStudents(column, type = 'string') {
    students.sort((a, b) => {
        if (type === 'number') {
            return a[column] - b[column];
        } else {
            return a[column].localeCompare(b[column]);
        }
    });
    displayStudents();
}

// Добавляем обработчики событий для сортировки
document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => {
        const column = th.getAttribute('data-column');
        const type = (column === 'id' || column === 'course') ? 'number' : 'string';
        sortStudents(column, type);
    });
});

// Функция для открытия модального окна
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Обработчик формы добавления студента
document.getElementById('student-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const newStudent = {
        id: students.length + 1,
        fio: document.getElementById('fio').value,
        course: parseInt(document.getElementById('course').value),
        group: document.getElementById('group').value,
        form: document.getElementById('form').value,
        type: document.getElementById('type').value,
        address: document.getElementById('address').value,
        from: document.getElementById('from').value
    };

    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    displayStudents();
    updateStatistics();  // Обновляем статистику
    closeModal();
});

// Загружаем данные при загрузке страницы
window.onload = () => {
    displayStudents();
    updateStatistics();  // Обновляем статистику при загрузке
};

// Функция для сортировки студентов
function sortStudents(column, type = 'string') {
    students.sort((a, b) => {
        if (type === 'number') {
            return a[column] - b[column];
        } else {
            return a[column].localeCompare(b[column]);
        }
    });
    displayStudents();
}

// Добавляем обработчики событий для сортировки
document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => {
        const column = th.getAttribute('data-column');
        const type = (column === 'id' || column === 'course') ? 'number' : 'string';
        sortStudents(column, type);
    });
});
