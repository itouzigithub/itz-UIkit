window.itz = window.itz || {};
itz.$ = itz.$ || {};

/**
 * 给字符串等间距的添加空格
 * 例如 '10241023102210' => '1024 1023 1022 10'
 *
 * @text { String } 
 * @postion { Number } 每隔多少位增加空格，默认为 4
 * @prefix { Boolean } 前置（默认） '10241023102210' => '10 2410 2310 2210' | 后置：'10241023102210' => '1024 1023 1022 10'  
 */
itz.$.addSpace = function (text, position, prefix) {
  var position = position || 4;
  prefix = prefix === undefined ? true : prefix;
  var str = String(text);
  if (!str || str.length <= position) return text;

  var mod = str.length % position;
  var init = prefix ? str.slice(0, mod) : '';
  var arr = prefix ? str.slice(mod).split('') : str.split('');
  return arr.reduce((pre, cur, index) => {
    return pre + (index % position === 0 ? " " + cur : cur)
  }, init)
}