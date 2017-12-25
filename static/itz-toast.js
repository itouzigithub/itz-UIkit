/** 
 * 提示弹框，三秒后自动消失
 * Author Bison
 * Update 2017-08
 *
 * @val { string } 提示内容
 * @type { boolean } true：成功-绿色 false：失败-红色
 */
(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else {
    var ret = factory()
    if (global.itz) {
      itz.$ = itz.$ || {};
      itz.$.Toast = ret
    }
    return ret
  }
})(window, function () {
  var lock = false;
  var wrapper;
  var child;

  return function (val, type) {
    if (lock) return;
    lock = true;

    val = val || '操作成功';
    if (type === undefined) {
      type = true
    }
    // 确保只创建一个
    if (!wrapper) {
      wrapper = document.createElement('div');
      child = document.createElement('div');
      var style = {
        display: 'none',
        width: '100%',
        height: '60px',
        position: 'absolute',
        top: '0',
        bottom: '0',
        margin: 'auto',
        textAlign: 'center',
        zIndex: '999'
      }
      var style2 = {
        display: 'inline-block',
        height: '60px',
        lineHeight: '60px',
        paddingLeft: '45px',
        paddingRight: '45px',
        borderRadius: '3px',
        fontSize: '18px',
        color: '#fff',
        opacity: 0,
        transitionProperty: 'opacity',
        transitionDuration: '.3s'
      }

      for (var x in style) {
        wrapper.style[x] = style[x]
      }
      
      for (var x in style2) {
        child.style[x] = style2[x]
      }

      wrapper.appendChild(child);
      document.body.appendChild(wrapper);
    }

    if (type) {
      child.style.backgroundColor = '#13CE66';
    } else {
      child.style.backgroundColor = '#ee5555';
    }

    child.textContent = val;

    wrapper.style.display = 'block';

    setTimeout(function () {
      child.style.opacity = '1'
    }, 0)

    setTimeout(function () {
      child.style.opacity = '0'
    }, 2700)
    
    setTimeout(function () {
      wrapper.style.display = 'none';
      lock = false;
    }, 3000);
  }
}); 

