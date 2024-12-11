const express = require("express");
const app = express();
const mysql = require("mysql2/promise");

// Настройка подключения к базе данных
const db = mysql.createPool({
    host: "example.mysql.database",
    user: "your_user",
    password: "your_password",
    database: "CollegeDB"
});


// Эндпоинт для получения статистики
app.get("/api/statistics", async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
                (SELECT COUNT(*) FROM students) AS totalStudents,
                (SELECT COUNT(DISTINCT group_name) FROM students) AS totalGroups,
                (SELECT ROUND(AVG(course), 2) FROM students) AS averagePerformance
        `);
        res.json(rows[0]);
    } catch (error) {
        console.error("Ошибка при запросе статистики:", error);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

// Эндпоинт для получения списка студентов
app.get("/api/students", async (req, res) => {
    try {
        const [students] = await db.query("SELECT id, name, course, group_name AS `group`, study_form AS studyForm, study_type AS studyType, address, origin FROM students");
        res.json(students);
    } catch (error) {
        console.error("Ошибка при запросе студентов:", error);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000");
});
