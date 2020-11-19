$(function () {
  const selectLanguage = [];
  $('.js-form').on('submit',function () {
    selectLanguage.length = 0;
    $('.js-checkbox:checked').each(function () {
      selectLanguage.push($(this).val());
    });
    alert('「検索対象は、' + selectLanguage + 'です。」');
    event.preventDefault();
  });
});