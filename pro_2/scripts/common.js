/**
 * Created by unnKoel on 2016/7/17.
 */
function addLoadEvent(func) {
  var oldLoad = window.onload;
  if (typeof  window.onload !== 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldLoad();
      func();
    }
  }
}