const {createPool} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    connectionLimit: 10
})


//fetching records of companyid=102 
pool.query('SELECT * FROM test.user where companyId = 102', (err, res)=>{
    return console.log(res);//printing result in terminal
})
