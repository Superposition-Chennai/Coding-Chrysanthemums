import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'mentors.json');

// Initialize data file if not exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Get all mentors
app.get('/api/mentors', (req, res) => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        console.error('Read error:', err);
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Add a mentor
app.post('/api/mentors', (req, res) => {
    try {
        const newMentor = {
            id: Date.now(),
            ...req.body,
            dateAdded: new Date().toISOString()
        };

        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
        }

        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        data.push(newMentor);

        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

        res.status(201).json(newMentor);
    } catch (err) {
        console.error('Write error:', err);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
