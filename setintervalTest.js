
const A = document.createElement('div');
A.setAttribute('id','clock')
document.body.appendChild(A);

const B = document.createElement('p');
A.append(B);

setInterval(()=>{
  const time = new Date()
  
  const FT = {
    year : time.getFullYear(),
    month : time.getMonth(),
    date : time.getDate(),
    hour : time.getHours(),
    minute : time.getMinutes(),
    second : time.getSeconds()
  }

  B.innerText = `${FT.year}년 ${FT.month}월 ${FT.date}일
  ${FT.hour}시 ${FT.minute}분 ${FT.second}초`

},1000)
