//****터치 이동 방향 체크***********************************************************************************************************************/
export function getMoveType(htTouchInfo,x, y) {
    //hor은 수평방향, ver은 수직방향
    let nMoveType = "none";
    let nX = Math.abs(htTouchInfo.nX- x);
    let nY = Math.abs(htTouchInfo.nY - y);
    let nDis = nX + nY;
    
    //현재 움직인 거리가 기준 거리보다 작을 땐 방향을 판단하지 않는다.
    if(nDis < 50) { return nMoveType }
    
    //수평 방향을 판단하는 기준 기울기
    let nHSlope = ((window.innerHeight / 2) / window.innerWidth).toFixed(2) * 1;
    
    //현재 터치의 기울기
    let nSlope = parseFloat((nY / nX).toFixed(2), 10);
    
    if(nSlope > nHSlope) {
        nMoveType = "ver";
    } else {
        nMoveType = "hor";
    }
    return nMoveType;
}

//**** 암호화 복호화 ***********************************************************************************************************************/
export function Encrypt(theText) {
	if(theText === '' || theText === null) {
		return '';
	}
	let output = '';
	let Temp = [];
	let Temp2 = [];
	let TextSize = theText.length;
	for (let i = 0; i < TextSize; i++) {
		let rnd = Math.round(Math.random() * 122) + 68;
		Temp[i] = theText.charCodeAt(i) + rnd;
		Temp2[i] = rnd;
	}
	for (let i = 0; i < TextSize; i++) {
		output += String.fromCharCode(Temp[i], Temp2[i]);
	}
	return output;
}

export function unEncrypt(theText) {
	if(theText === '' || theText === null) {
		return '';
	}
	let output = '';
	let Temp = [];
	let Temp2 = [];
	let TextSize = theText.length;
	for (let i = 0; i < TextSize; i++) {
		Temp[i] = theText.charCodeAt(i);
		Temp2[i] = theText.charCodeAt(i + 1);
	}
	for (let i = 0; i < TextSize; i = i+2) {
		output += String.fromCharCode(Temp[i] - Temp2[i]);
	}
	return output;
}

//****해당 위치 쿠키 삭제***********************************************************************************************************************/
export function clearAllCookies(domain, path) {
	let doc = document;
	let _domain = domain || doc.domain;
	let _path = path || '/';
	let cookies = doc.cookie.split(';');
	let now = +(new Date());
	for (let i = cookies.length - 1; i >= 0; i--) {
	  doc.cookie = cookies[i].split('=')[0] + '=; expires=' + now + '; domain=' + _domain + '; path=' + _path;
	}
}

//****주소뒤 변수 받아오기***********************************************************************************************************************/
export function ckeck_addressParam(getParam){
	let _tempUrl = window.location.search.substring(1);
	let returnText =""
	if(_tempUrl === "") return "";
	let _tempArr = _tempUrl.split("&");
	
	for(let i = 0; _tempArr.length; i++) {
		let _tempStr = _tempArr[i]
		if(_tempStr === undefined) return;
		let _checkValue = _tempStr.split("=");
		if(_checkValue[0] === getParam){
			returnText =  _checkValue[1];
			return returnText;
		}
	}
	return returnText
}

//****천단위 , 추가***********************************************************************************************************************/
export function makeCurrency(str) {
	let _str = str+"";
	let arr = _str.split("");
	let len =arr.length;
	let cnt = 1;
	let i
	for (i =len - 1;i > 0; i--) {
		if(arr[i] === ","){
			arr.splice(i,1);
		}
	}
	len=arr.length;
	for (i=len - 1; i > 0; i--,cnt++) {
		if (cnt % 3 === 0) {
			arr[i]="," + arr[i];
		}
	}
	_str=arr.join("");
	return _str;
}

//****페이지 타이틀 변경***********************************************************************************************************************/
export function getPageTitle(pageName) {
    switch(pageName){

        case "Gift_Main": return "기프트 메인";
        case "Registration": return "내 화장품 등록";
		case "RegisterProductView": return "내 화장품 등록";
        case "Dressing_Table": return "화장대 메인";
        case "Event": return "이벤트 메인";
        case "Mypage": return "마이페이지 메인";
        case "Product_Detail": return "제품상세";
        case "Product_Request": return "기프트 신청";
        case "Mytable_Analysis": return "화장대 분석";
        case "MYproduct_Uploading": return "등록 대기중인 화장품";
        case "MYproduct_Upload_Result": return "등록결과";
        case "Event_Detail": return "이벤트 상세";
        case "Mypage_Info_Edit": return "내 정보 수정";
        case "Mypage_Point_History": return "포인트 관리";
        case "Mypage_QnA": return "문의하기";
        case "Product_Register": return "등록하기";
        case "InsertUserInfo": return "회원정보 입력";
		case "InsertUserDetailInfo": return "정보수정 입력";
		case "Mypage_Notice_Board": return "공지사항";
		case "Mypage_Notice_Board_View": return "공지사항 상세";
		case "sameProductDetail": return "궁합제품 상세정보";
		case "badProductDetail": return "궁합제품 상세정보";
		case "productDetailEdit": return "제품 정보 수정";
		case "User_Skin_Edit": return "피부타입수정";
		case "User_Trouble_Edit": return "피부고민수정";
		case "SkinTypeEdit": return "피부타입 등록"
		case "SkinTroubleEdit": return "피부고민 등록";
		case "Survey_Main": return "월간 뷰티랩";
		case "Survey_Product_request": return "월간 뷰티랩";
		case "Survey01_Main": return "월간 뷰티랩";
		case "dressTableProductState": return '완성해주세요!'
        default:return;
    }
}

//****0 추가***********************************************************************************************************************/
export function addToZero(_num,_checkNum){
	let _originNum = _num+'';
	if(_originNum.length>=_checkNum.length) return _originNum;
	let _returnNum = ''

	for(let i=0;i<_checkNum.length-_originNum.length;i++){
		_returnNum += '0';
	}
	_returnNum +=_originNum;
	return _returnNum;
}

//****이메일 체크***********************************************************************************************************************/
//var str = emailCheckListener(email);
export function emailCheckListener(email){
	// 이메일 주소를 판별하기 위한 정규식
	let reg_email=/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
	// 인자 email_address를 정규식 format 으로 검색
	if (email.search(reg_email) === -1){  
		return false;
	}
	return true;
}

//****html 디코딩***********************************************************************************************************************/
export function htmlDecode(input){
	var e = document.createElement('div');
	e.innerHTML = input;
	return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

//****unescapeHtml ***********************************************************************************************************************/
export function unescapeHtml(parseStr){
	parseStr = parseStr.replace(/&lt;/g,"<");
	parseStr = parseStr.replace(/&gt;/g,">");
	parseStr = parseStr.replace(/&quot;/g,"\"");
	parseStr = parseStr.replace(/&#039;/g,"'");
	return parseStr;
}
//**** 오늘하루 보지 않기 ***********************************************************************************************************************/
export function setCookieAt00( name, value, expiredays ) {   
    var todayDate = new Date();   
    todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);  
    if ( todayDate > new Date() )  
    {  
    expiredays = expiredays - 1;  
    }  
    todayDate.setDate( todayDate.getDate() + expiredays );   
     document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"   
}  

export function getCookie( name ) {  
	var nameOfCookie = name + "=";  
	var x = 0;  
	while ( x <= document.cookie.length )  
	{  
		var y = (x+nameOfCookie.length);  
		if ( document.cookie.substring( x, y ) === nameOfCookie ) { 
			let endOfCookie=document.cookie.indexOf( ";", y )
			if ( endOfCookie === -1 )  
				endOfCookie = document.cookie.length;  
			return unescape( document.cookie.substring( y, endOfCookie ) );  
		}  
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x === 0 )  
			break;  
	}  
	return "";  
 }