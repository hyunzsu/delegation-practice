const contents = getNode('.contents');
const textField = getNode('#comment37');

// contents.addEventListener('click', handler);

function clearText(target) {
  target.value = '';
}

function handler(e) {
  let target = e.target;

  // console.log(target);

  // 부모가 data-name 있는지 없는지 체크
  // 클릭한 대상이 없으면 계속 반복 돌림 -> 부모로? 부모자체를 계속 넣음
  // 어디를 클릭하든 좋아요가 잘 눌림
  while (!attr(target, 'data-name')) {
    target = target.parentNode;

    // 부모가 BODY면 끝내, nodeName 대문자여서 대문자로
    if (target.nodeName === 'BODY') {
      target = null; // 문제 생길까봐
      return;
    }
  }

  if (target.dataset.name === 'like') {
    console.log('like!');
    toggleClass(target, 'active');
  }

  if (target.dataset.name === 'comment') {
    textField.focus();
  }

  if (target.dataset.name === 'send') {
    console.log(textField.value);

    if (textField.value === '') {
      console.log('입력해주세요.');
      return;
    }

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `;

    insertLast('.comment_container', template);

    clearText(textField);
  }
}

contents.addEventListener('click', handler);

textField.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    textField.value;

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">현지수</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `;
    insertLast('.comment_container', template);

    clearText(textField);
  }
});
