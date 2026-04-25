-- Buat database jika belum ada (opsional)
-- CREATE DATABASE task_manager;

-- Gunakan database
-- \c task_manager;

-- Hapus tabel kalau sudah ada (opsional, biar aman)
DROP TABLE IF EXISTS tasks;

-- Buat ulang tabel
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);