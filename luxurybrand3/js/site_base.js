window.learnedPage = parseInt(getCookie('luxury1'));
if (!window.learnedPage) {
  window.learnedPage = 3;
}

window.currentPage = parseInt(pageName(), 10);
if (window.currentPage >= window.learnedPage) {
  window.learnedPage = window.currentPage;
  setCookie('luxury1', window.currentPage);
}

function check(index) {
  if (index > window.learnedPage) {
    alert('您只能跳转到学习过的页面！');
    return;
  }

  if (index < 10) {
    window.location.href = '0' + index + '.html';
  } else {
    window.location.href = index + '.html';
  }

}