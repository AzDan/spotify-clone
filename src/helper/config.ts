import dotenv from 'dotenv';
dotenv.config();

const clientId = process.env.REACT_APP_CLIENT_ID
const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT
const redirectUri = process.env.REACT_APP_REDIRECT_URI
const clientSecret = process.env.REACT_APP_CLIENT_SECRET

export {clientId, authEndpoint, redirectUri, clientSecret}
