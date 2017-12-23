window.learnedPage = parseInt(getCookie('luxury1'));
if (!window.learnedPage) {
  window.learnedPage = 3;
}

window.currentPage = parseInt(pageName(), 10);
if (window.currentPage >= window.learnedPage) {
  window.learnedPage = window.currentPage;
  setCookie('luxury1', window.currentPage);
}

function checkPage(index) {
  if (index > window.learnedPage) {
    $('#tips_div').show();
    return;
  }

  if (index < 10) {
    window.location.href = '0' + index + '.html';
  } else {
    window.location.href = index + '.html';
  }
}