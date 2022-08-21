https://fontawesome.com/ 아이콘 사이트 + 숙제

/_ CSS 괄호안이 순번 :nth-child()
header nav a:nth-child(1) {
color: aqua;
}
/_ main .sec2-wrapper .right-container > div:nth-of-type(1) {
width: 100%;
} _/
header nav a:nth-child(2) {
color: aqua;
} _/

- CSS 글자
  color: White; 색깔
   크기
  font-weight: 500; 굵기
  text-transform: capitalize; 소/대문자
  text-align:center,left,right;

- CSS
  overflow: hidden; 넘어감 감추기
  box-shadow: 5px 15px 25px rgba(0, 0, 0, 0.1); 그림자
  transition: 0.6s; 모션속도

- CSS border
  border-radius: 20px; 모퉁이 둥굴기

- CSS height
  vw,vh ;화면크기에 비례
  % ;부모크기에 비례

- CSS display
  display: none; 속성을 가진 엘리먼트를(ele) 없에다
  display: block; 속성을 가진 엘리먼트가(ele)쌓아진다
  display: inline; 속성을 가진 엘리먼트가(ele) 한줄로 나열된다
  display: flex; 자식을 가로나열
  display: grid; 자식을 격자나열

- CSS 중간정렬 ( FLEX )
  display: flex; 가로나열
  justify-content: center; 수평 more: flex-start(왼쪽) flex-end(오른쪽)
  align-content: center; 수직 more: flex-start(위쪽) flex-end(아래쪽)
  flex-direction: column; 세로나열
  gap: 0px; 가로 + 세로
  column-gap: 0px; 가로
  row-gap: 0px; 세로

position: relative; 기준점

position: absolute; absolute는 기준점(relative)을 따른다.
left: 50%;
top: 50%;
// transform: translateX(-50%);
// transform: translateY(-50%);
transform: translate(-50%, -50%);

HTML 새줄 (Enter)
<br />
animation
animation-name: home-span;
animation-duration: 4s;
animation-iteration-count: infinite;

@keyframes home-span {
from {
color: white;
}
to {
color: black;
}
