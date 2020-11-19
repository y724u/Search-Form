$(function () {

  $('form').submit(function () {
    if ($('li').hasClass('box__checked')) {
      const selectLanguage = $('.box__checked').text();
      alert('「検索対象は、' + selectLanguage + 'です');
    } else {
      alert('選択されていません');
    }
  });

  // <!-- プログラミング言語ボタン活性化&非活性化 -->
  // $('.js-checkbox').on('change', function () {
  //   const target = $(this).data('target');
  //   const language = document.getElementById(target);
  //   if ($(this).prop('checked')) {
  //     $(language).addClass('box__checked');
  //   } else {
  //     $(language).removeClass('box__checked');
  //   }
  // });

  // $('form').submit(function () {
  //   if ($('li').hasClass('box__checked')) {
  //     const [] = $('.js-checkbox').data('target');
  //     console.log([]);
  //     alert('「検索対象は、' + selectLanguage + 'です');
  //   } else {
  //     alert('選択されていません');
  //   }
  // });



  // $('form').submit(function () {
  //   if ($('li').hasClass('box__checked')) {
  //     const selectLanguage = $('.box__checked').val();
  //     alert('「検索対象は、' + selectLanguage + 'です');
  //   } else {
  //     alert('選択されていません');
  //   }
  // });


  // $('form').submit(function () {
  //   if ($(".js-checkbox").prop('checked')) {
  //     const selectLanguage = $('.js-checkbox').text();
  //     alert('「検索対象は、' + selectLanguage + 'です');
  //   } else {
  //     alert('選択されていません');
  //   }
  // });

//   $('form').submit(function () {
//   $('.js-checkbox').on('change',function() {
//     if
//     const result = $('checkbox:checked').text();
//     alert( result );
// })
// });


  // const search = $('input').hasClass('box__checked');
  // console.log(search);

  //    $('form').submit(function() {

  //     alert('「検索内容は、' +  '」');

  // });


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