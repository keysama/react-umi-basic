const developmentConfig = require('./env/development');
const productionConfig = require( './env/production');

module.exports = process.env.NODE_ENV == 'development' ? developmentConfig : productionConfig;