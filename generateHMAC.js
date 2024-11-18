const crypto = require('crypto');

// HMAC credentials
const accessKey = 'user-key';
const secretKey = 'my-secret-key';

// Get the current date in RFC 1123 format
const currentDate = new Date().toUTCString();

// Set up the headers
const headers = {
    'User-Agent': 'curl/7.29.0',
    'x-custom-a': 'test',
    'Date': currentDate,
};

// Define the signed headers
const signedHeaders = ['User-Agent', 'x-custom-a'];

// Create the string to sign
const stringToSign = signedHeaders.map(header => `${header}:${headers[header]}`).join('\n');

// Debug: Output the string to sign
console.log(`String to Sign:\n${stringToSign}`);

// Generate the HMAC signature
const signature = crypto.createHmac('sha256', secretKey)
                        .update(stringToSign)
                        .digest('base64');

// Output the current date and the generated signature
console.log(`Current Date: ${currentDate}`);
console.log(`X-HMAC-SIGNATURE: ${signature}`);
