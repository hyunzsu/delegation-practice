// 이벤트 위임 -> 제일 큰 부모한테 이벤트 걸고, 값 뽑아냄, 조건을 나눠서 사용

const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');
// const list = getNodes('.navigation > li');

// console.log(navigation);

function makeArray(arrayLike) {
  return Array.from(arrayLike);
}

function handler(e) {
  let target = e.target.closest('li');
  if (!target) return;

  // let list = navigation.children;
  let list = makeArray(navigation.children); // 유사배열을 배열로 변환
  let index = attr(target, 'data-index');

  // let arr = makeArray(list); // forEach 만들기 위해 유사배열로 만들어줌. 변수를 list에 넣음??

  // static method
  // Array.from(list)
  // instance method
  // Array.prototype.slice.call(list)
  // let arr = [...list] // 전개연산자 이용

  // item에 li,li,li,..[li,li,li,li]
  list.forEach((item) => removeClass(item, 'is-active'));

  // console.log(visualImage);

  attr(visualImage, 'src', `./assets/part01/${data[index - 1].src}`);
  attr(visualImage, 'alt', data[index - 1].alt);

  // console.log(index);

  addClass(target, 'is-active');
}

navigation.addEventListener('click', handler);
