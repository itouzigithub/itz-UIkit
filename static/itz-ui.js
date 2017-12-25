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
   * 模拟 select 元件
   */
  var $select = $('.js-select');
  if ($select) {
    $(document).on('click', function () {
      $select.attr('status', '0');
      $select.find('ul').fadeOut(200);
    })

    $select.each(function (index, el) {
      (function () {
        var $el = $(el);
        var $ipt = $el.find('.ipt-select');
        var $ul = $el.find('ul');
        var $ini = $el.find('li').first().contents();

        // 默认以第一项为选中项
        if ($ini) {
          $ipt.append($ini.clone())
        } else {
          return console.error('select should have at least one option')
        }

        $el.on('click', function (event) {
          event.stopPropagation();
          var $target = $(event.target);
          
          if ($target.hasClass('js-option')) {
            var $clone = $target.contents().clone();
            $ipt.empty().append($clone);
            $ul.fadeOut(200);
            $el.attr('status', '0');
            return
          }

          if ($target.parent().hasClass('js-option')) {
            var $clone = $target.parent().contents().clone();
            $ipt.empty().append($clone);
            $ul.fadeOut(200);
            $el.attr('status', '0');
            return
          }

          $el.attr('status', '1');
          $ul.fadeIn(200);
        })
      })()
    })
  }

  /**
   * 输入域字数限制
   */
  $('.js-maxlength').each(function (index, el) {
    (function () {
      // 创建字数限制提示
      var $limiter = $('<div class="txt-limiter"></div>');
      var $txt = $(el).find('textarea');
      var max = parseInt($txt.attr('maxlength'));
      if (!max) {
        console.error('missing attribute: maxlength')
      }

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
            var text = $txt.val().slice(0, max);
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
        $popbox.fadeOut('fast');
      })
    })()
  })

  /**
   * tooltip
   */
  $('[tooltip]').each(function (index, el) {
    (function () {
      var $tip = $('<div class="tooltip"></div>');
      $tip.text($(el).attr('tooltip'));
      $tip.append($('<i></i>'))
      $('body').append($tip);

      var x = $(el).offset().left + $(el).outerWidth() / 2 - $tip.outerWidth() / 2;
      var y = $(el).offset().top - 50;

      $tip.css({
        top: y + 'px',
        left: x + 'px'
      })

      $(el).hover(function () {
        $tip.show();
      }, function () {
        $tip.hide();
      })
    })()
  })

})




