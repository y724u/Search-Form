$(function() {
    // <!-- ダウンロードボタン活性化&非活性化 -->
    $('.js-checkbox').on('change', function () {
      const target = $(this).data('target');
      const language = document.getElementById(target);
      if ($(this).prop('checked')){
        $(language).addClass('box__checked');
      }else{
        $(language).removeClass('box__checked');
      }
    });
});







//  // // <!-- サービスシステム開発モーダル -->
//  let scrollPosition1;
//  $('.js-modalOpen').on('click', function () {
//    const target = $(this).data('target');
//    const modal = document.getElementById(target);
//    scrollPosition1 = $(window).scrollTop();
//    $(modal).addClass('show_modal');
//    $('body').addClass('fixed').css({ 'top': -scrollPosition1 });
//    return false;
//  });
//  $('.js-modalClose').on('click', function () {
//    $('.js--modal').removeClass('show_modal');
//    $('body').removeClass('fixed').css({ 'top': 0 });
//    window.scrollTo(0, scrollPosition1);
//  });