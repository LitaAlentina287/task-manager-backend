# Task Manager Backend

## 📌 Deskripsi Project

Project ini merupakan implementasi sistem backend untuk aplikasi **Task Manager**. Sistem ini dirancang untuk mengelola data tugas secara terstruktur dengan kemampuan menyimpan data secara permanen menggunakan database PostgreSQL.

Selain itu, sistem juga dilengkapi dengan fitur keamanan berupa validasi input serta pencatatan aktivitas (logging) untuk setiap request yang masuk ke server.

---

## 🗄️ Persiapan Database (PostgreSQL)

Database yang digunakan adalah PostgreSQL dengan tabel bernama **tasks**.

Struktur tabel:

| Field        | Tipe Data    | Keterangan                 |
| ------------ | ------------ | -------------------------- |
| id           | SERIAL       | Primary Key                |
| title        | VARCHAR(255) | Tidak boleh kosong         |
| description  | TEXT         | Deskripsi tugas            |
| is_completed | BOOLEAN      | Default: false             |
| created_at   | TIMESTAMP    | Default: CURRENT_TIMESTAMP |

---

## 📸 Dokumentasi Screenshot

### 1. Struktur Tabel Database

📌 Screenshot:

* Tampilan tabel `tasks` di PostgreSQL

Output yang diharapkan:

- Tabel tasks berhasil dibuat
- Memiliki kolom: id, title, description, is_completed, created_at
- Struktur sesuai dengan yang ditentukan pada soal

![Database Tasks Table](images/database-tasks-table.png)

---

### 2. Server Berjalan

📌 Screenshot:

* Terminal saat menjalankan `npm start`
* Menampilkan: **Server jalan di port 3000**

![Server Running](images/server-running.png)

---

### 3. GET /tasks

📌 Screenshot:

* Hasil request GET semua data di Postman

![GET All Tasks](images/get-all-tasks.png)

---

### 4. GET /tasks/:id

📌 Screenshot:

* Hasil mengambil 1 data berdasarkan ID

![GET Task By ID](images/get-task-by-id.png)

---

### 5. POST /tasks

📌 Screenshot:

* Input data di Postman (body)
* Hasil data berhasil ditambahkan

![POST Task Request](images/post-task-request.png)
![POST Task Response](images/post-task-response.png)

---

### 6. PUT /tasks/:id

📌 Screenshot:

* Update data tugas
* Hasil perubahan data

![PUT Task Request](images/put-task-request.png)
![PUT Task Response](images/put-task-response.png)

---

### 7. DELETE /tasks/:id

📌 Screenshot:

* Hasil penghapusan data

![DELETE Task](images/delete-task-response.png)

---

### 8. Validasi Error 400

📌 Screenshot:

* POST dengan title kosong
* Muncul pesan: **Title tidak boleh kosong**

![Error 400 Validation](images/error-400-validation.png)

---

### 9. Error Handling 404

📌 Screenshot:

* Akses ID yang tidak ada
* Muncul: **Task tidak ditemukan**

![Error 404 Not Found](images/error-404-not-found.png)

---

### 10. Logging Middleware

📌 Screenshot:

* Tampilan terminal yang menunjukkan:

  * GET /tasks
  * POST /tasks
  * dll

![Logging Middleware](images/logging-middleware.png)

---

## ⚙️ Spesifikasi Fitur

### 🔹 Middleware Logging

Sistem mencatat method, URL, dan waktu request ke console.

### 🔹 Validasi Input (Status 400)

Title tidak boleh kosong atau hanya spasi.

### 🔹 Error Handling (Status 404)

Data tidak ditemukan akan menampilkan pesan error.

### 🔹 Koneksi Database

Menggunakan PostgreSQL dengan package `pg`.

### 🔹 Menjalankan Aplikasi

Menggunakan nodemon.

---

## 🔗 Daftar Endpoint API

* GET /tasks
* GET /tasks/:id
* POST /tasks
* PUT /tasks/:id
* DELETE /tasks/:id

---

## 🚀 Cara Menjalankan Aplikasi

1. Install dependencies:

```
npm install
```

2. Jalankan server:

```
npm start
```

3. Akses:

```
http://localhost:3000
```

---

## 👩‍💻 Informasi

Nama: Lita Alentina
Program Studi: Teknik Informatika
Universitas: Universitas Teknologi Bandung
Tahun: 2026

---

## 📌 Catatan

Project ini dibuat untuk memenuhi tugas **Ujian Tengah Semester (UTS)** mata kuliah Pemrograman Web 2.
