require('dotenv').config();
const envVars = process.env;

module.exports = {
    port: envVars.PORT,
    env: envVars.NODE_ENV,
    mongo: {
        uri: envVars.MONGODB_URI,
        port: envVars.MONGO_PORT,
        isDebug: envVars.MONGOOSE_DEBUG
    },
    jwtSecret : envVars.JWT_SECRET,
    remoteUrl: 'mongodb://medicine-mongo-devops:D0GC4z1Z2V8tO6h3q9cggHusFEMOrYJargIf1HsgWNYSrKojXv8UQAD5mPJUdXN65EhiDQ8gVCafACDbfAFqcg==@medicine-mongo-devops.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@medicine-mongo-devops@'
};
