// 틱택토 규칙
// 각 칸 클릭 시 O, X가 번갈아 표시
// O 혹은 X가 일직선으로 배열 시 배열된 기호가 승리
// 9개 칸이 다 채워졌는데, 승리조건이 없으면 다시 리셋

// 1. 클릭시 O와 X를 번갈아 표시

const blocks = document.getElementsByClassName('block');
console.log(blocks);

// blocks[0].addEventListener('click', (e) => {
//   console.log('test');
// });
