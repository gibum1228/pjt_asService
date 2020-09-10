// init
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
// js 파일 실행 위치를 기준으로 하기 때문에 D:\pjt_asService\html를 기준으로 변경
var str = __dirname.replace("/js", ""); // .substring(0, 2) + '/pjt_asservice/html'; 
// post 방식으로 form 데이터를 받기 위함
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//===================================================

// get은 route 개념 (경로를 찾다)
// 사용자가 HOME으로 접속했을 때 :: localhost:3000
app.get('/', (req, res) => { 
    res.sendFile(path.join(str + '/login.html'));
});
// 사용자가 로그인 주소로 접속했을 때 :: localhost:3000/login
app.get('/index', (req, res) => { 
    res.sendFile(path.join(str + '/main.html'));
});
// 회원 가입 창
router.get('/signup', (req, res) => {
    res.sendFile(path.join(str + '/signup.html'));
});
// 회원 가입 확인창
app.post('/signUp_Ok', (req, res) => {
    var snum = req.body.userSNum;
    var name = req.body.userName;
    var psw = req.body.userPsw;
    var email = req.body.userEmail;
    var major = req.body.userMajor;
    var grade = req.body.userGrade;

    res.send(`
        회원 정보<br>
        ==============================<br>
        학번: ${snum}<br>
        이름: ${name}<br>
        비밀번호: ${psw}<br>
        이메일 주소: ${email}<br>
        학년: ${grade}<br>
        전공: ${major}
    `);
});
 
app.use(express.static(str)); // D:\pjt_asService\html 경로를 기준으로 만듦
app.use('/', router);
app.listen(process.env.port || 3000, () => { // 포트 3000 바라보기
    console.log('Connected 3000 port!');
});