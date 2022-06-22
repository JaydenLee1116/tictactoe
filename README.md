# Jayden's TicTacToe GAME

## Toy Project : Vanilla JS를 이용하여 tictactoe 게임 만들어보기

<img width="350" alt="Screen Shot 2022-06-22 at 11 59 52" src="https://user-images.githubusercontent.com/86241737/174934247-51180154-9ab0-46af-86a7-1897cc9443aa.png">

링크 : [Jayden's TicTacToe](https://jaydenlee1116.github.io/tictactoe/)

### 1. TicTacToe 규칙
- 두 사람이 9개의 칸에 번갈아 가며 각각 O, X 를 배치
- 먼저 가로줄 3칸 혹은 세로줄 3칸 혹은 대각선 3칸을 본인의 모양으로 채우면 승리

### 2. 코드 작성 과정

1. 각 블록을 블릭 시, O와 X가 번갈아가면 채워진다. (단, 이미 블록에 모양이 존재하지 않을 때만 채워진다.)

```javascript
'use strict';

// 총 횟수
let count = 0;

const blocks = document.getElementsByClassName('block');
for (let block of blocks) {
  block.addEventListener('click', (e) => {
    if (count % 2 === 0 && e.target.innerHTML === '') {
      e.target.innerHTML = 'O';
      count++;
      } else if (count % 2 === 1 && e.target.innerHTML === '') {
      e.target.innerHTML = 'X';
      count++;
      }
    }
```

2-1. 승리 조건에 따른 각각의 객체를 만들고 객체 내에서 O, X를 key로 두고 각각의 value를 0으로 둠
2-2. 해당 칸에 모양이 놓일 때마다 각 위치에 해당하는 승리조건 객체의 key에 당하는 value를 1씩 증가
2-3. 승리조건 객체가 갖는 값이 3이 등장했을 때, 승리 메세지 표출
2-4. 모든 칸이 채워졌을 때(count = 9) 일 때, 승리조건 객체에 3이 없다면 무승부 메세지 표출

```javascript
// 가로줄 승리 조건
let firstRow = { O: 0, X: 0 };
let secondRow = { O: 0, X: 0 };
let thirdRow = { O: 0, X: 0 };

// 세로줄 승리 조건
let firstColumn = { O: 0, X: 0 };
let secondColumn = { O: 0, X: 0 };
let thirdColumn = { O: 0, X: 0 };

// 
let downCross = { O: 0, X: 0 };
let upCross = { O: 0, X: 0 };

const blocks = document.getElementsByClassName('block');
for (let block of blocks) {
  block.addEventListener('click', (e) => {
    if (count % 2 === 0 && e.target.innerHTML === '') {
      e.target.innerHTML = 'O';
      count++;
      if (e.target.id === 'one') {
        firstRow.O++;
        firstColumn.O++;
        downCross.O++;
      } else if (e.target.id === 'two') {
        firstRow.O++;
        secondColumn.O++;
      } else if (e.target.id === 'three') {
        firstRow.O++;
        thirdColumn.O++;
        upCross.O++;
      } else if (e.target.id === 'four') {
        secondRow.O++;
        firstColumn.O++;
      } else if (e.target.id === 'five') {
        secondRow.O++;
        secondColumn.O++;
        downCross.O++;
        upCross.O++;
      } else if (e.target.id === 'six') {
        secondRow.O++;
        thirdColumn.O++;
      } else if (e.target.id === 'seven') {
        thirdRow.O++;
        firstColumn.O++;
        upCross.O++;
      } else if (e.target.id === 'eight') {
        thirdRow.O++;
        secondColumn.O++;
      } else {
        thirdRow.O++;
        thirdColumn.O++;
        downCross.O++;
      }
    } else if (count % 2 === 1 && e.target.innerHTML === '') {
      e.target.innerHTML = 'X';
      count++;
      if (e.target.id === 'one') {
        firstRow.X++;
        firstColumn.X++;
        downCross.X++;
      } else if (e.target.id === 'two') {
        firstRow.X++;
        secondColumn.X++;
      } else if (e.target.id === 'three') {
        firstRow.X++;
        thirdColumn.X++;
        upCross.X++;
      } else if (e.target.id === 'four') {
        secondRow.X++;
        firstColumn.X++;
      } else if (e.target.id === 'five') {
        secondRow.X++;
        secondColumn.X++;
        downCross.X++;
        upCross.X++;
      } else if (e.target.id === 'six') {
        secondRow.X++;
        thirdColumn.X++;
      } else if (e.target.id === 'seven') {
        thirdRow.X++;
        firstColumn.X++;
        upCross.X++;
      } else if (e.target.id === 'eight') {
        thirdRow.X++;
        secondColumn.X++;
      } else {
        thirdRow.X++;
        thirdColumn.X++;
        downCross.X++;
      }
    }
    
    // 아래 각 승리 조건 달성 시 승리 메세지 표출
    if (
      Object.values(firstRow).includes(3) ||
      Object.values(secondRow).includes(3) ||
      Object.values(thirdRow).includes(3) ||
      Object.values(firstColumn).includes(3) ||
      Object.values(secondColumn).includes(3) ||
      Object.values(thirdColumn).includes(3) ||
      Object.values(downCross).includes(3) ||
      Object.values(upCross).includes(3)
    ) {
      // setTimeout을 통해 시각적으로 칸이 다 채워지고 아래 메시지가 등장하게 
      setTimeout(() => {
        alert('승리하셨습니다! 게임을 다시 시작합니다!');
        location.reload();
      });
    } else if (count === 9) {
      setTimeout(() => {
        alert('무승부입니다! 게임을 다시 시작합니다!');
        location.reload();
      });
    }
  });
}
```

### 3. 마주친 문제점 및 배운점

3-1. Javascript에서 DOM 조작 시 요소들이 불러와지지 않았던 문제(undefined)
해결 방법
```html
<script src="./scripts/main.js" defer></script>
```
브라우저가 html을 파싱할 때 <script> 태그를 만나게 되면 곧바로 연결된 javascript 파일을 실행하게 된다.
즉, 뒤에 파싱에 대한 명령인 defer가 없으면 아직 html이 파싱도 안되었는데, html 요소를 가져오는 js의 코드들이 실행되는 것
  
- async : 브라우저가 html 파싱 시, script를 병렬적으로 실행함과 동시에 파싱을 진행한다.
  - 즉, 혹여나 html의 파싱이 더 늦다면 DOM 조작 시 에러 발생하므로 DOM 조작을 하지 않는 경우에만 사용할 것
- defer : </html> (html이 끝나는 순간)을 만나면 script 파일을 실행한다.
  - html이 모두 파싱된 후, script 파일이 실행되므로 DOM 조작 시 안정적이다.

3-2. 승리 조건 혹은 무승부 조건 만족 후 메세지 표출 시, alert가 곧장 실행되어 마지막 모양이 시각적으로 놓여지는 게 안보이는 문제

```javascript
setTimeout(() => {
  alert('승리하셨습니다! 게임을 다시 시작합니다!');
  location.reload();
  });
```
setTimeout을 통해 비동기적 처리를 해주어 스택에 위치한 '모양 배치'부터 실행이 끝나고 메세지 표출에 대한 함수가 실행되게끔하여 해결

### 4. 느낀점 및 개선사항

4-1. 느낀점
- HTML과 CSS 부분을 최대한 간단하게 하고 진행하였기 때문에, 사실 처음 만들어보긴 하지만 js로 틱택토를 구현하는 건 정말 금방할 줄 알았는데 조금 시간이 걸렸다. ㅎㅁㅎ
- 특히, 처음 js에서 DOM요소를 가져오는데 파일내에서 콘솔을 찍어봐도 계속 'undefined'만 나왔던 게 정말 난관이었다.
- 하필이면 또 크롬 개발자도구에서 콘솔을 찍으면 값이 제대로 나오니 도저히 이해가 안갔다...(당연히 크롬 개발자 도구에선 html 파싱이 끝나고 찍는 것이었다.)
- 그래도 이 과정에서 html 파싱하는 과정 및 script 파일의 실행 순서에 대해서 공부할 수 있어서 너무 유익했다.
- 함수 및 기능에 대한 구글링만 해서 이뤄낸 프로젝트라서 자신감이 쪼금 올라갔다.

4-2. 개선사항
- 사실 코드를 보면 너무 지저분하다. 일단 이 게임이 구동되게 하고 싶어서 반복문도 여러번 쓰고 승리조건에 따른 객체를 만든 것도 아이디어는 그럴싸하지만 너무 비효율적이다.
- 솔직히 이런 코드를 개선하는 부분까지는 아직은 힘든 게 당연하다고 생각하지만, 나중에 좀더 실력있는 개발자가 되었을 때 이 프로젝트를 보고 다시 코드를 짜볼 것이다.
- 얼마나 깔끔하게 정리하게 될지 기대된다.
