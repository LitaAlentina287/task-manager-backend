const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

// ✅ logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

// ✅ test route
app.get('/', (req, res) => {
  res.send('Server jalan');
});

// ✅ test database
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET ALL TASKS
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST TASK (VALIDASI 400)
app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title tidak boleh kosong' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET TASK BY ID (404)
app.get('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Task tidak ditemukan' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ UPDATE TASK (PUT + 404)
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, is_completed } = req.body;

  try {
    const check = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);

    if (check.rows.length === 0) {
      return res.status(404).json({ message: 'Task tidak ditemukan' });
    }

    const result = await pool.query(
      `UPDATE tasks 
       SET title = $1, description = $2, is_completed = $3 
       WHERE id = $4 RETURNING *`,
      [title, description, is_completed, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE TASK (404)
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const check = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);

    if (check.rows.length === 0) {
      return res.status(404).json({ message: 'Task tidak ditemukan' });
    }

    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);

    res.json({ message: 'Task berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ SERVER
app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});