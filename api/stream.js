const axios = require('axios');

module.exports = async function handler(req, res) {
    try {
        const response = await axios.get('https://video.gumlet.io/66fc268e39995a2b6ce85ae3/66fc28d639995a2b6ce8640e/main.m3u8', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://wag.ika.lat/',
                'Origin': 'https://wag.ika.lat'
            }
        });

        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stream' });
    }
}
