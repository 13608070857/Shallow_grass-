const mysql=require("mysql");
const dbpool={
  pool:{},
  config:{
      host:"localhost",
      port:"3306",
      user:"root",
      password:"root",
      database:"kinder"
  },
  create(){
      this.pool=mysql.createPool(this.config)
  },
  connect(sql,arr,fn){
      this.pool.getConnection((err,connection)=>{
          connection.query(sql,arr,fn);
          connection.release();
      });
  }
};
dbpool.create();
module.exports=dbpool;