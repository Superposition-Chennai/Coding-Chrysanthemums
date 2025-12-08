const fs = require('fs');
const path = require('path');

// In Netlify, we'll use a simple JSON file for storage
// For production, consider using a database like MongoDB Atlas or Supabase

const DATA_FILE = path.join('/tmp', 'mentors.json');

// Initialize data file
const initData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
    }
};

const readData = () => {
    initData();
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        if (event.httpMethod === 'GET') {
            const mentors = readData();
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(mentors)
            };
        }

        if (event.httpMethod === 'POST') {
            const newMentor = JSON.parse(event.body);
            const mentors = readData();

            const mentor = {
                id: Date.now(),
                ...newMentor,
                dateAdded: new Date().toISOString()
            };

            mentors.push(mentor);
            writeData(mentors);

            return {
                statusCode: 201,
                headers,
                body: JSON.stringify(mentor)
            };
        }

        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error', details: error.message })
        };
    }
};
