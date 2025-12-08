import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return new Response('', { status: 200, headers });
    }

    try {
        // Get the blob store
        const mentorStore = getStore('mentors');

        if (req.method === 'GET') {
            // Retrieve mentors from blob storage
            let mentors = await mentorStore.get('list', { type: 'json' });

            // Initialize if doesn't exist
            if (!mentors) {
                mentors = [];
                await mentorStore.setJSON('list', mentors);
            }

            return new Response(JSON.stringify(mentors), {
                status: 200,
                headers
            });
        }

        if (req.method === 'POST') {
            const newMentor = await req.json();

            // Get existing mentors
            let mentors = await mentorStore.get('list', { type: 'json' }) || [];

            // Create mentor object
            const mentor = {
                id: Date.now(),
                ...newMentor,
                dateAdded: new Date().toISOString()
            };

            // Add to list
            mentors.push(mentor);

            // Save back to blob storage
            await mentorStore.setJSON('list', mentors);

            return new Response(JSON.stringify(mentor), {
                status: 201,
                headers
            });
        }

        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({
            error: 'Internal server error',
            details: error.message
        }), {
            status: 500,
            headers
        });
    }
};

export const config = {
    path: '/api/mentors'
};
