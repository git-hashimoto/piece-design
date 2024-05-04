// ローディング画面
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  });
});

//ファーストビュー順番に表示
$(function() {
  $(document).ready(function(){
    $(".kv__text").delay(2300).fadeIn(1000);
  });
});

// ハンバーガーメニュー
$(function () {
  $(".hamburger,.header__nav-sp,.header__nav-link-sp").on("click", function() {
    $(".hamburger").toggleClass("open");
    $(".header__nav-sp").fadeToggle();
  });
});


// フェードイン
AOS.init();

// ヘッダー下スクロール非表示/上スクロール表示
const header = $('.header');
const headerHeight = header.outerHeight();
let beforeScrollTop = 0;

$(window).scroll(function () {
  const windowWidth = $(window).width();
  // PC用の処理
  if (windowWidth >= 768) {
    const scrollTop = $(this).scrollTop();
    if((scrollTop > beforeScrollTop) && (scrollTop > headerHeight)) {
      header.addClass('js_hide');
    } else {
      header.removeClass('js_hide');
    }
    beforeScrollTop = scrollTop;
  }
  // SP用の処理
  else {
    $(".header").show();
  }
});

//ページ内リンクスムーススクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

// トップに戻るボタン
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 200) {
    $('.top-btn').fadeIn(500);
  } else {
    $('.top-btn').fadeOut(500);
  }
});
$('.top-btn').click(function () {
  $('body, html').animate({ scrollTop: 0 }, 700);
  return false;
});

// スライダー
$(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: '5%',
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    variableWidth: true,
    nextArrow: false,
    prevArrow: false
  });
});