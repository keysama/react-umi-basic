import developmentConfig from './env/development';
import productionConfig from './env/production';


export default process.env.NODE_ENV == 'development' ? developmentConfig : productionConfig;