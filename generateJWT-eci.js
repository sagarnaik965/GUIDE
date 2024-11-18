const jwt = require('jsonwebtoken');

// Payload with the username 'jack' and an expiration of 1 hour
const payload = {
     key: 'ECI0001',
    exp: Math.floor(Date.now() / 1000) + (60 * 60  ) // 1 hour expiration
};

// Secret key from APISIX
const secret = '4054f7cf07e344346cd3f287985e76a2';

// Generate the token
const token = jwt.sign(payload, secret, { algorithm: 'HS256' });

console.log('Generated payload:', payload );
console.log('Generated JWT token:', token);
