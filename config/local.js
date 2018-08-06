module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY || 'fallback_api_key',
  payloadSize: process.env.PAYLOAD_SIZE_LIMIT || '1mb'
};
