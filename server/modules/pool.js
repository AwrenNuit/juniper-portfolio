const pg = require(`pg`);

const config = {
    database: `juniper_art`,
    host: `localhost`,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on(`connect`, ()=>{
    console.log('connected to pg');
});

pool.on(`error`, (error)=>{
    console.log('error connecting to pg', error);
});

module.exports = pool;