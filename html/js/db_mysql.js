// DB 초기화
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111112',
  database : 'as_service'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// 노트북 정보 넣기
var max = 15;
for(var i = 1; i <= max; i++){
  var sql = 'INSERT INTO ict_gear (category, gName, state) VALUES (?, ?, ?)';
  var params = ['노트북', `삼성 NT910S3K-K38W (${i})`, true];

  connection.query(sql, params, (err, results, fields) => {
    if(err){
      console.log(err);
    }
  });
}

connection.end();

// ================================================================================
