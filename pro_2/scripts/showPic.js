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

function prepareGallery() {
  if (!document.getElementById || !document.getElementsByTagName) return;
  var gallery = document.getElementById('imagegallery');
  var aList = gallery.getElementsByTagName('a');
  for (var i = 0; i < aList.length; i++) {
    var a = aList[i];
    a.onclick = function (event) {
      event = event || window.event;
      var isNewWin = showPic(this);
      if (isNewWin) {
        event.returnValue = false;
        return false;
      } else {
        return true;
      }
    }
  }
}

function showPic(whichpic) {
  if (!document.getElementById) return false;
  if (!document.getElementById('placeholder')) return false;
  var placeholder = document.getElementById('placeholder');
  if (placeholder) {
    var href = whichpic.getAttribute('href');
    placeholder.setAttribute('src', href);
  }

  var description = document.getElementById('description');
  if (description) {
    var text = whichpic.getAttribute('title');
    description.firstChild.nodeValue = text;
  }
  return true;
}

addLoadEvent(prepareGallery);