const mysql = require('mysql');
const { all } = require('underscore');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111112',
    database : 'as_service'
});
var okOrNo = true;

// 비밀번호 맞는지 확인
function pswSame() {
    var uPsw = document.getElementsByName("userPsw")[0].value;
    var cPsw = document.getElementsByName("checkPsw")[0].value;

    // 비밀번호는 8~16자리
    if(uPsw.length < 8 || uPsw.lengh > 16){ 
        okOrNo = false;
        document.getElementsByName("userPsw")[0].style.borderColor = 'red';
    }else{
        document.getElementsByName("userPsw")[0].style.borderColor = '#ccc';

        // 비밀번호 제대로 입력했는지 체크
        if(uPsw == cPsw){
            okOrNo = true;
            document.getElementsByName("userPsw")[0].style.borderColor = 'green';
            document.getElementsByName("checkPsw")[0].style.borderColor = 'green';
        }else{
            okOrNo = false;
            document.getElementsByName("userPsw")[0].style.borderColor = 'red';
            document.getElementsByName("checkPsw")[0].style.borderColor = 'red';
        }
    }
}
// 동일한 아이디가 있는지 확인
function idSame(){
    var sNum = document.getElementsByName("userSNum")[0].value;
    var date = new Date();
    
    // 가입 가능한 학번은 올해 학번 기준 -10학번까지 가능
    if(String(sNum).substring(0, 4) < (date.getFullYear() - 10) || String(sNum).substring(0, 4) > date.getFullYear()){
        okOrNo = false;
    }else{
        okOrNo = true;   
    }


}
// 모든 데이터 이상 없을 시 DB에 데이터 추가
function signUpOk(){
    var submitBtn = document.getElementById("upBtn");
    var clickBtn = document.getElementById("clickBtn");

    if(okOrNo){
        clickBtn.addEventListener('click', (event) => {
            submitBtn.disabled = false;
        });
    }else{
        submitBtn.disabled = true;
    }
}