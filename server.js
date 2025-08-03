const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.post('/api/workouts', async (req, res) => {
    const fetch = (await import('node-fetch')).default;
    const url = 'https://fitness-api.p.rapidapi.com/fitness';

    console.log('Received request body:', req.body);

    // Forward the POST body from the client to the external API
    const bodyParams = new URLSearchParams(req.body);

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'e11ebaa611mshcabaae73e8bdde9p185160jsnc132412d7ede',
            'x-rapidapi-host': 'fitness-api.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    };

    try {
        const response = await fetch(url, options);
        console.log('API response status:', response.status);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API error response:', errorText);
            return res.status(response.status).json({ error: 'API error', details: errorText });
        }
        const data = await response.json();
        console.log('API response data:', data);
        res.json(data);
    } catch (error) {
        console.error('Proxy fetch error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
