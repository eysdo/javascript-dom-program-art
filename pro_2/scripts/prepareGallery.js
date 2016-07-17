/**
 * Created by unnKoel on 2016/7/17.
 */
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

addLoadEvent(prepareGallery);