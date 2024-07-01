function BlurTextAnimeControl() {
    $('.smoothTextTrigger').each(function() {
      var elemPos = $(this).offset().top - 50; // Element's position, 50px above
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('combinedEffect'); // Add class when element is in view
      } else {
        $(this).removeClass('combinedEffect'); // Remove class when element is out of view
      }
    });
  }

  // Trigger animation on scroll
  $(window).scroll(function() {
    BlurTextAnimeControl();
  });

  // Trigger animation on page load
  $(window).on('load', function() {
    BlurTextAnimeControl();
  });

  function slideAnime(){
  //====下に動くアニメーションここから===
    $('.downAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 下から上へ表示するクラスを付与
            // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeDownUp");
            // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
            $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 下から上へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeDownUp");
            $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
            }
        });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述