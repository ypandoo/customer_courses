var pageCookie = 'luxury1';

window.learnedPage = parseInt(getCookie(pageCookie));
if (!window.learnedPage) {
  window.learnedPage = 3;
}

window.currentPage = parseInt(pageName(), 10);
if (window.currentPage >= window.learnedPage) {
  window.learnedPage = window.currentPage;
  setCookie(pageCookie, window.currentPage);
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

function closeTip() {
  $('#tips_div').hide();
}