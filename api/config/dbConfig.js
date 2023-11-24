module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DATABASE: 'teckstore',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}