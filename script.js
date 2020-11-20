$(function () {
  const selectLanguage = [];
  $('.js-form').on('submit',function () {
    selectLanguage.length = 0;
    $('.js-checkbox:checked').each(function () {
      selectLanguage.push($(this).val());
    });
    const answer = selectLanguage.join('、');
    alert('「検索対象は、' + answer + 'です。」');
    event.preventDefault();
  });
});