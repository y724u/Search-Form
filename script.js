$(function () {
  const selectLanguage = [];
  $('.js-form').on('submit', function (event) {
    event.preventDefault();
    selectLanguage.length = 0;
    $('.js-checkbox:checked').each(function (index, el) {
      selectLanguage.push($(el).val());
    });
    alert(`「検索対象は、${selectLanguage.join('、')}です。`);
  });
});