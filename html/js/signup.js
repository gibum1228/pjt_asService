var err = false;

// 비밀번호 맞는지 확인
function pswSame() {
    var uPsw = document.getElementsByName("userPsw")[0].value;
    var cPsw = document.getElementsByName("checkPsw")[0].value;

    // 비밀번호는 8~16자리
    if(uPsw.length < 8 || uPsw.lengh > 16){ 
        document.getElementsByName("userPsw")[0].style.borderColor = 'red';

        // 자식 만들어서 표시

        document.getElementsByName("userPsw")[0].appendChild("")
    }else{
        document.getElementsByName("userPsw")[0].style.borderColor = '#ccc';

        // 비밀번호 제대로 입력했는지 체크
        if(uPsw == cPsw){
            document.getElementsByName("userPsw")[0].style.borderColor = 'green';
            document.getElementsByName("checkPsw")[0].style.borderColor = 'green';
        }else{
            document.getElementsByName("userPsw")[0].style.borderColor = 'red';
            document.getElementsByName("checkPsw")[0].style.borderColor = 'red';
        }
    }
}