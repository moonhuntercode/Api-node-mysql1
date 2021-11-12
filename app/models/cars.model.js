'use strict'
const connection=require('../../config/connection');

var dataModels={
getCars:(callback)=>{
    if (connection) {
        let sql= `select * from cars`
        connection.query(sql,(error,rows)=>{
            if(error)throw error
            callback(rows)
        })
    }
}
}

module.exports=dataModels;