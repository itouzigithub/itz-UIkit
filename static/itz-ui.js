(function (fn) {
	fn();
	if (typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = fn;
	}
})(function () {
  /**
   * 标签页组件
   */
  $('.js-tab').each(function (index, el) {
    (function () {
      var $next = $(el).next();
      $(el).on('click', 'li', function () {
        if (!$(this).hasClass('itz-tab-active')) {
          var index = $(this).index();
          $(this).addClass('itz-tab-active').siblings().removeClass('itz-tab-active');
          $next.children().hide().eq(index).show();
        }
      })
    })()
  })

  /**
   * 输入框内容清除功能
   */
  $('.js-ipt-clear').each(function (index, el) {
    (function () {
      var $ipt = $(el).find('input');
      var $icon = $(el).find('.ipt-clear');
      $icon.click(function () {
        $ipt.val('').focus();
      })
    })()
  })

  /**
   * 输入域字数限制
   */
  $('.js-maxlength').each(function (index, el) {
    (function () {
      // 创建字数限制提示
      var $limiter = $('<div class="txt-limiter"></div>');
      var $txt = $(el).find('textarea');
      var max = $txt.attr('maxlength');

      $limiter.text('0/' + max);
      $(el).append($limiter);

      $txt.keydown(function () {
        var $this = $(this);
        // 确保文字输出后再统计字数
        setTimeout(function () {
          var length = $this.val().length;
          $limiter.text(length + '/' + max);
          $limiter.css({
            color: '#999'
          })

          if (length >= max) {
            $limiter.css({
              color: '#ee5555'
            })
            var text = $txt.val().slice(0, 140);
            $txt.val(text);
          }
        }, 0)
      });
    })()
  })

  /**
   * 弹框关闭
   */
  $('.js-pop-close').each(function (index, el) {
    (function () {
      var $popbox = $(el).parents('.popbox');
      $(el).click(function () {
        $popbox.fadeOut();
      })
    })()
  })

})




