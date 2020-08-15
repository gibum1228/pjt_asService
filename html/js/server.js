var express = require('express');
var app = express();

// get은 route 개념 (경로를 찾다)
app.get('/', (req, res) => { // 사용자가 HOME으로 접속했을 때 :: localhost:3000
    res.send('Hello home page');
});
app.get('/login', (req, res) => { // 사용자가 로그인 주소로 접속했을 때 :: localhost:3000/login
    res.send('<h1>Login please</h1>');
});

app.listen(3000, () => { // 포트 3000 바라보기
    console.log('Connected 3000 port!');
});