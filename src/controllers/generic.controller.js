import fetch from 'node-fetch';

export const sayHi = async (req, res) => {
    res.status(200).json({ message: 'Hello Tokenizer' });
};

export const getToken = async (req, res) => {
    const { clientId, clientSecret } = req.params;
    const spotifyUrl = 'https://accounts.spotify.com/api/token';

    const result = await fetch(spotifyUrl, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
        },
        body: 'grant_type=client_credentials'
    });

    const { access_token } = await result.json();
    return res.status(200).json({
        ok: true, 
        code: 200,
        message: 'Access token retreived successfully',
        token: access_token
    });
};
