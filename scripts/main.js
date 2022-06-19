'use strict';
// 틱택토 규칙
// 각 칸 클릭 시 O, X가 번갈아 표시
// O 혹은 X가 일직선으로 배열 시 배열된 기호가 승리
// 9개 칸이 다 채워졌는데, 승리조건이 없으면 다시 리셋

// 클릭시 O와 X를 번갈아 표시 및 각각의 객체에 값을 변경 (각 승리 조건에 값 체크))

// 총 횟수
let count = 0;

let firstRow = { O: 0, X: 0 };
let secondRow = { O: 0, X: 0 };
let thirdRow = { O: 0, X: 0 };

let firstColumn = { O: 0, X: 0 };
let secondColumn = { O: 0, X: 0 };
let thirdColumn = { O: 0, X: 0 };

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
      // setTimeout으로 둬야 시각적으로 칸이 다 채워지고 나서 아래 조건이 실행된다.
      setTimeout(() => {
        alert('승리하셨습니다! 게임을 다시 시작합니다!');
        location.reload();
      });
    } else if (count === 9) {
      alert('무승부입니다! 게임을 다시 시작합니다!');
      location.reload();
    }
  });
}
